import db from "../models/index.js";
import { BAD_REQUEST, NOT_FOUND, OK, REDIRECT } from "../utils/httpErrorCodes.js";
import parser from "ua-parser-js";
const OneLink = db.oneLink;
const OneLinkActivity = db.OneLinkActivity;
export const redirectOneLinkByCode = async (req, res) => {
  try {
    console.log(req.body);
    const onelink_code = req.params.onelink_code;

    const getResponse = await OneLink.findOne({ where: { onelink_code: onelink_code } });
    if (getResponse) {
      // get user-agent header
      var ua = parser(req.headers["user-agent"]);
      console.log(ua);
      const user_agent = ua?.ua;
      const browser_name = ua?.browser?.name;
      const browser_version = ua?.browser?.version;
      const engine_name = ua?.engine?.name;
      const engine_version = ua?.engine?.version;
      const os_name = ua?.os?.name;
      const os_version = ua?.os?.version;
      const device_model = ua?.device?.model;
      const device_type = ua?.device?.type;
      const device_vendor = ua?.device?.vendor;
      const cpu_architecture = ua?.cpu?.architecture;
      const createResponse = await OneLinkActivity.create({
        onelink_code: getResponse.onelink_code,
        user_agent,
        browser_name,
        browser_version,
        engine_name,
        engine_version,
        os_name,
        os_version,
        device_model,
        device_type,
        device_vendor,
        cpu_architecture
      });
      if(createResponse){
        return res.status(REDIRECT).redirect(getResponse.long_url);
      }
      // return res.json(ua);
      // write the result as response
    
    }
    return res.status(NOT_FOUND).json({ success: false, message: "shortcodes not found", data: data });
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const homePage = (req, res) => {
  res.send("Connectwyze API services!");
};
