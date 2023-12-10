import express from "express";
import * as sourceMediumVaidation from '../validations/sourceMediumValidation.js'
import * as sourceMediumController from '../controllers/sourceMediumController.js'
const router = express.Router();

// CURD operation for shortern services 
router.route("/create").post(sourceMediumVaidation.createSourceMediumVal , sourceMediumController.createUtmSourceMediumMapping)
router.route("/update").put(sourceMediumVaidation.editSourceMediumVal , sourceMediumController.editUtmSourceMediumMapping)
router.route("/delete").post(sourceMediumVaidation.sourceMediumDeleteVal , sourceMediumController.deleteUtmSourceMediumMapping)
router.route("/get/:id").get( sourceMediumController.getUtmSourceMediumMappingByid)
router.route("/get_all").get(sourceMediumController.listUtmSourceMediumMapping)
router.route("/get_all_source_with_medium").get(sourceMediumController.listAllMediumBySource)
router.route("/get_all/:source_id").get(sourceMediumController.listAllMediumBySourceId)


export default router;