import db from "../models/index.js";
import { BAD_REQUEST, NOT_FOUND, OK } from "../utils/httpErrorCodes.js";

const LeadEngineLogs = db.leadEngineLogs;

export const createLeadEngineLog = async (req, res) => {
    try {
      const data = await LeadEngineLogs.create(req.body);
      console.log(data);
      return res.status(OK).json({ success: true, message: "Data logged successfully", data: data });
    } catch (errors) {
      console.log(errors)
      return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
    }
};

export const updateLeadEngineLog = async (req, res) => {
  try {
    const api_response = JSON.parse(req.body.api_response);
    const id = req.body.id;
    console.log(req.body)
    const data = await LeadEngineLogs.update(
      {api_response: api_response},
      {
        where: {
          id: id,
        }
      }
    );
    if (data[0] > 0) {
      return res.status(OK).json({ success: true, message: "Lead engine log updated successfully", data: data });
    } else {
      return res.status(NOT_FOUND).json({ success: false, message: "Failed to update lead engine log", data: [] });
    }
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const getLeadEngineLogById = async (req, res) => {
  try {
    console.log(req.body);
    const id = req.params.id;
    const data = await LeadEngineLogs.findOne({ where: { id: id } });
    if (data) {
      return res.status(OK).json({ success: true, message: "log fetched successfully", data: data });
    }
    return res.status(NOT_FOUND).json({ success: false, message: "Log not found", data: data });
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};


export const checkDuplicateLeadById = async (req, res) => {
  try {
    console.log(req.body);
    const id = req.params.id;
    const data = await LeadEngineLogs.findOne({ where: { unique_id: id } });
    if (data) {
      return res.status(OK).json({ success: true, message: "Duplication lead found"});
    }
    return res.status(NOT_FOUND).json({ success: false, message: "Dupliaction lead not found"});
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};