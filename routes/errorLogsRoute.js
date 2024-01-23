import express from "express";
import * as errorLogsController  from '../controllers/errorLogsController.js'

const router = express.Router();

router.route("/create").post(errorLogsController.createErrorLogs)

export default router; 