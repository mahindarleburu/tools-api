import isEmpty from "./isEmpty.js";
import validator from "validator";
export const qrcodeVal = (req, res, next) => {
    var data = req.body;
    console.log(data);
    let errors = {};
    data.long_url = !isEmpty(data.long_url) ? data.long_url : "";

  
    if (!validator.isURL(data.long_url, { require_tld: false })) {
      errors.long_url = "long_url is invalid";
    }
    
    if (!isEmpty(errors)) {
      return res
        .status(400)
        .json({ success: false, message: "vaildation error", data: errors });
    }
    next();
  };