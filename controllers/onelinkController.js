import db from "../models/index.js";
import { customAlphabet } from "nanoid";
import { BAD_REQUEST, NOT_FOUND, OK } from "../utils/httpErrorCodes.js";
import { createEventLogs } from "./eventLogsController.js";
import QRCode from 'qrcode'
const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const nanoid = customAlphabet(alphabet, 9);
const OneLink = db.oneLink;
export const createOneLink = async (req, res) => {
  try {
    console.log(req.body);
    let payload = {};
    payload.name = req.body.name;
    payload.long_url = req.body.long_url;
    payload.user_id = req.body.user_id;
    payload.user_email = req.body.user_email;
    payload.user_name = req.body.user_name;
    payload.module = req.body.module;
    payload.action = 'create';
    payload.type = req.body.type;
    if (req?.headers?.platform) {
      payload.platform = req?.headers?.platform;
    }else{
      payload.platform = "others";
    }
    if (req?.body?.meta) {
      payload.meta = JSON.parse(req?.body?.meta);
    }
    let data = await OneLink.create({
      onelink_code: nanoid(),
      long_url: payload.long_url,
      user_id: payload.user_id,
      name: payload.name,
      platform: payload.platform,
      type: payload.type,
      meta: payload.meta,
    });
    const qrcodeSrc =  await QRCode.toDataURL(data.onelink)
    data.src = qrcodeSrc;
    const logData = await createEventLogs(payload)
    return res.status(OK).json({ success: true, message: "OneLink Generated", data: data });
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const editOneLink = async (req, res) => {
  try {
    console.log(req.body);
    let payload = {};
    payload.name = req.body.name;
    payload.long_url = req.body.long_url;
    payload.user_id = req.body.user_id;
    payload.user_email = req.body.user_email;
    payload.user_name = req.body.user_name;
    payload.module = req.body.module;
    payload.action = 'update';
    payload.type = req.body.type;
    payload.onelink_code = req.body.onelink_code;
    if (req?.headers?.platform) {
      payload.platform = req?.headers?.platform;
    }else{
      payload.platform = "others";
    }
    if (req?.body?.meta) {
      payload.meta = JSON.parse(req?.body?.meta);
    }
    const logData = await createEventLogs(payload)
    const response = await OneLink.findOne({ where: { onelink_code: payload.onelink_code } });
    console.log(response);
    if (response) {
      if (payload.user_id === response.user_id && payload.onelink_code === response.onelink_code) {
        const data = await OneLink.update(
          { long_url: payload.long_url, user_id: payload.user_id, user_name: payload.user_name, user_email: payload.user_email, name: payload.name, platform: payload.platform, type: payload.type, meta: payload.meta },
          {
            where: {
              onelink_code: payload.onelink_code,
              user_id: payload.user_id,
            },
          }
        );
        if (data[0] > 0) {
          const data = await OneLink.findOne({ where: { onelink_code: payload.onelink_code } });
          if (data) {
            const qrcodeSrc =  await QRCode.toDataURL(data.onelink)
            data.src = qrcodeSrc;
            return res.status(OK).json({ success: true, message: "shortcode by code", data: data });
          } else {
            return res.status(NOT_FOUND).json({ success: false, message: "shortcodes not found", data: {} });
          }
        } else {
          return res.status(NOT_FOUND).json({ success: false, message: "update failed given id not found", data: [] });
        }
      } else {
        return res
          .status(BAD_REQUEST)
          .json({ success: false, message: "onelink_code and user_id is missmatch", data: [] });
      }
    } else {
      return res.status(NOT_FOUND).json({ success: false, message: "onelink_code not found", data: [] });
    }
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const deleteOneLink = async (req, res) => {
  try {
    console.log(req.body);
    const payload = req.body
    payload.action = 'delete'
    payload.module = payload.type
    const logData = await createEventLogs(payload)
    const response = await OneLink.findOne({ where: { onelink_code: payload.onelink_code } });
    if (response) {
      if (payload.user_id === response.user_id && payload.onelink_code === response.onelink_code) {
        const data = await OneLink.destroy({
          where: {
            onelink_code: payload.onelink_code,
            user_id: payload.user_id,
          },
        });
        console.log(data);
        if (data) {
          return res.status(OK).json({ success: true, message: "OneLink deleted success", data: data });
        } else {
          return res.status(NOT_FOUND).json({ success: false, message: "delete failed", data: [] });
        }
      } else {
        return res
          .status(BAD_REQUEST)
          .json({ success: false, message: "onelink_code and user_id is missmatch", data: [] });
      }
    } else {
      return res.status(NOT_FOUND).json({ success: false, message: "onelink_code not found", data: [] });
    }
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const listOneLink = async (req, res) => {
  try {
    console.log(req.body);
    const data = await OneLink.findAll({
      order: [["updated_at", "DESC"]],
      where: {
        platform: {
          [db.Op.ne]: "cap",
        },
      },
    });
    if (data) {
      return res.status(OK).json({ success: true, message: "list all Generated success", data: data });
    } else {
      return res.status(NOT_FOUND).json({ success: false, message: "onelink list not found", data: [] });
    }
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const listOneLinkbyUid = async (req, res) => {
  try {
    console.log(req.body);
    const user_id = req.params.user_id;
    const data = await OneLink.findAll({
      where: {
        user_id: user_id,
        platform: {
          [db.Op.ne]: "cap",
        },
      },
      order: [["updated_at", "DESC"]],
    });
    if (data) {
      return res.status(OK).json({ success: true, message: "list of shortcodes", data: data });
    } else {
      return res.status(NOT_FOUND).json({ success: false, message: "list of shortcodes not found", data: [] });
    }
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const getOneLinkByCode = async (req, res) => {
  try {
    console.log(req.body);
    const onelink_code = req.params.onelink_code;
    const data = await OneLink.findOne({ where: { onelink_code: onelink_code } });
    if (data) {
      const qrcodeSrc =  await QRCode.toDataURL(data.onelink)
      data.src = qrcodeSrc;
      return res.status(OK).json({ success: true, message: "shortcode by code", data: data });
    } else {
      return res.status(NOT_FOUND).json({ success: false, message: "shortcodes not found", data: {} });
    }
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};
