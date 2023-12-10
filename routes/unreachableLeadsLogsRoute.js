import express from "express";
import * as unreachableLeadsLogsController from '../controllers/unreachableLeadsLogsController.js'

const router = express.Router();

router.route("/create").post(unreachableLeadsLogsController.createUnreachableLeadLog);
router.route("/get/:id").get(unreachableLeadsLogsController.getUnreachableLeadLog);


export default router;