import db from "../models/index.js";
import { BAD_REQUEST, NOT_FOUND, OK } from "../utils/httpErrorCodes.js";
const UtmSource = db.utmSource;
const UtmSourceMediumMapping = db.utmSourceMediumMapping;
export const createUtmSource = async (req, res) => {
  try {
    console.log(req.body);
    const display_name = req.body.display_name;
    let data = {};
    const response = await UtmSource.create({ display_name: display_name });
    data = response;
    return res.status(OK).json({ success: true, message: "UtmSource Generated success", data: data });
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const editUtmSource = async (req, res) => {
  try {
    console.log(req.body);
    const name = req.body.name;
    const display_name = req.body.display_name;
    const id = req.body.id;

    const data = await UtmSource.update(
      {name: name, display_name: display_name },
      {
        where: {
          id: id,
        },
      }
    );
    if (data[0] > 0) {
      return res.status(OK).json({ success: true, message: "source updated success", data: data });
    } else {
      return res.status(NOT_FOUND).json({ success: false, message: "update failed given id not found", data: [] });
    }
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const deleteUtmSource = async (req, res) => {
  try {
    console.log(req.body);
    const id = req.body.id;
    const data = await UtmSource.destroy({
      where: {
        id: id
      },
      force: true,
    });
    const delMapping = await UtmSourceMediumMapping.destroy({
      where: {
        utmSourceId: id
      },
      force: true,
    });
    if(data){
      return res.status(OK).json({ success: true, message: "UtmSource deleted success", data: data });
    }else{
      return res.status(BAD_REQUEST).json({ success: false, message: "no records available to delete with id", data: data });
    }

  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const listUtmSource = async (req, res) => {
  try {
    console.log(req.body);
    const data = await UtmSource.findAll({order: [['updated_at', 'DESC']] })
    return res.status(OK).json({ success: true, message: "list all Generated success", data: data });
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const listUtmSourcebyUid = async (req, res) => {
  try {
    console.log(req.body);
    const user_id = req.params.user_id;
    let data = {};
    const response = await UtmSource.findAll({ where: { user_id: user_id } });
    data = response;
    if (data) {
      return res.status(OK).json({ success: true, message: "list of shortcodes", data: data });
    }
    return res.status(NOT_FOUND).json({ success: false, message: "list of shortcodes not found", data: data });
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const getUtmSourceByid = async (req, res) => {
  try {
    console.log(req.body);
    const id = req.params.id;
    const data = await UtmSource.findOne({ where: { id: id } });
    if (data) {
      return res.status(OK).json({ success: true, message: "source by code", data: data });
    }
    return res.status(NOT_FOUND).json({ success: false, message: "sources not found", data: data });
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};
