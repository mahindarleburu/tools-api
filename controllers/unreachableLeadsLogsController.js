import db from "../models/index.js";
import { BAD_REQUEST, NOT_FOUND, OK } from "../utils/httpErrorCodes.js";

const UnreachableLeadsLogs = db.UnreachableLeadsLogs;

export const createUnreachableLeadLog = async (req, res) => {
    try {
        console.log(req.body);
        const data = await UnreachableLeadsLogs.create(req.body);
        return res.status(OK).json({ success: true, message: "Data logged successfully", data: data });
    } catch (errors) {
        console.log(errors)
        return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
    }
};


export const getUnreachableLeadLog = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await UnreachableLeadsLogs.findOne({ where: { id: id } });
    if (data) {
      return res.status(OK).json({ success: true, message: "log fetched successfully", data: data });
    }
    return res.status(NOT_FOUND).json({ success: false, message: "Log not found", data: data });
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};
