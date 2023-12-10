import express from "express";
import * as leadEngineController from '../controllers/leadEngineController.js'

const router = express.Router();

router.route("/create").post(leadEngineController.createLeadEngineLog)
router.route("/update").put(leadEngineController.updateLeadEngineLog)
router.route("/get/:id").get(leadEngineController.getLeadEngineLogById)
router.route("/check_duplicate_lead/:id").get(leadEngineController.checkDuplicateLeadById)


export default router;