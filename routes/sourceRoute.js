import express from "express";
import * as sourceValidation from '../validations/sourceValidation.js'
import * as sourceController from '../controllers/sourceController.js'
const router = express.Router();

// CURD operation for shortern services 
router.route("/create").post(sourceValidation.createSourceVal , sourceController.createUtmSource)
router.route("/update").put(sourceValidation.editSourceVal , sourceController.editUtmSource)
router.route("/delete").post(sourceValidation.sourceDeleteVal , sourceController.deleteUtmSource)
router.route("/get_all").get(sourceController.listUtmSource)
router.route("/get/:id").get( sourceController.getUtmSourceByid)


export default router;