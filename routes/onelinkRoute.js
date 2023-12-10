import express from "express";
import * as onelinkValidation from '../validations/onelinkValidation.js'
import * as onelinkController from '../controllers/onelinkController.js'
const router = express.Router();

// CURD operation for shortern services 
router.route("/create").post(onelinkValidation.createOnelinkVal , onelinkController.createOneLink)
router.route("/update").put(onelinkValidation.editOnelinkVal , onelinkController.editOneLink)
router.route("/delete").post(onelinkValidation.deleteOnelinkVal , onelinkController.deleteOneLink)
router.route("/get_all").get(onelinkController.listOneLink)
router.route("/get/:onelink_code").get( onelinkController.getOneLinkByCode)
// get shorten url data by user_id
router.route("/get_all/:user_id").get( onelinkController.listOneLinkbyUid)




export default router;