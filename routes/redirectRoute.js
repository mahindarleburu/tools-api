import express from "express";
import * as shorturlController from '../controllers/redirectController.js'
const router = express.Router();

router.route("/").get( shorturlController.homePage)
router.route("/:onelink_code").get( shorturlController.redirectOneLinkByCode)

export default router;