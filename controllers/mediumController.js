import db from "../models/index.js";
import { BAD_REQUEST, NOT_FOUND, OK } from "../utils/httpErrorCodes.js";
const UtmMedium = db.utmMedium;
const UtmSourceMediumMapping = db.utmSourceMediumMapping;
export const createUtmMedium = async (req, res) => {
  try {
    console.log(req.body);
    const display_name = req.body.display_name;
    const data = await UtmMedium.create({display_name: display_name });
    return res.status(OK).json({ success: true, message: "UtmMedium Generated success", data: data });
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const editUtmMedium = async (req, res) => {
  try {
    console.log(req.body);
    const display_name = req.body.display_name;
    const id = req.body.id;
    const data = await UtmMedium.update(
      {display_name: display_name},
      {
        where: {
          id: id,
        }
      }
    );
    if (data[0] > 0) {
      return res.status(OK).json({ success: true, message: "medium updated success", data: data });
    } else {
      return res.status(NOT_FOUND).json({ success: false, message: "update failed given id not found", data: [] });
    }
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const deleteUtmMedium = async (req, res) => {
  try {
    console.log(req.body);
    const id = req.body.id;
    const data = await UtmMedium.destroy({
      where: {
        id: id
      },
        force: true
    });
    const delMapping = await UtmSourceMediumMapping.destroy({
      where: {
        utmMediumId: id
      },
      force: true,
    });
    if(data){
      return res.status(OK).json({ success: true, message: "UtmMedium deleted success", data: data });
    }else{
      return res.status(BAD_REQUEST).json({ success: false, message: "no records available to delete with id", data: data });
    }

  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const listUtmMedium = async (req, res) => {
  try {
    console.log(req.body);
    const data = await UtmMedium.findAll({order: [['updated_at', 'DESC']] })
    return res.status(OK).json({ success: true, message: "list all Generated success", data: data });
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const getUtmMediumByid = async (req, res) => {
  try {
    console.log(req.body);
    const id = req.params.id;
    const data = await UtmMedium.findOne({ where: { id: id } });
    if (data) {
      return res.status(OK).json({ success: true, message: "medium by code", data: data });
    }
    return res.status(NOT_FOUND).json({ success: false, message: "medium not found", data: data });
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};
