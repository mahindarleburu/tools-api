import db from "../models/index.js";
import { BAD_REQUEST, NOT_FOUND, OK } from "../utils/httpErrorCodes.js";

const ErrorLogs = db.ErrorLogs;

export const createErrorLogs = async (req, res) => {
    try {
      console.log("************************************************************************")
      console.log(req.body)
      console.log("************************************************************************")
      const data = await ErrorLogs.create(req.body);
      console.log(data)
      return res.status(OK).json({ success: true, message: "Error logged successfully", data: data });
    } catch (errors) {
      console.log(errors)
      return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
    }
};