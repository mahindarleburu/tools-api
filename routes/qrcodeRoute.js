import express from "express";
import * as qrcodeValidation from '../validations/qrcodeValidation.js'
import * as qrCodeController from '../controllers/qrcodeController.js'
const router = express.Router();

router.route("/").post(qrcodeValidation.qrcodeVal , qrCodeController.createQrcode)




export default router;