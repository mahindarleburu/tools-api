import express from "express";
import * as mediumValidation from '../validations/mediumValidation.js'
import * as mediumController from '../controllers/mediumController.js'
const router = express.Router();

// CURD operation for shortern services 
router.route("/create").post(mediumValidation.createMediumVal , mediumController.createUtmMedium)
router.route("/update").put(mediumValidation.editMediumVal , mediumController.editUtmMedium)
router.route("/delete").post(mediumValidation.mediumDeleteVal , mediumController.deleteUtmMedium)
router.route("/get_all").get(mediumController.listUtmMedium)
router.route("/get/:id").get( mediumController.getUtmMediumByid)


export default router;