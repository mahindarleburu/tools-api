import isEmpty from "./isEmpty.js";
import validator from "validator";
export const createOnelinkVal = (req, res, next) => {
  var data = req.body;
  console.log(data);
  let errors = {};
  data.long_url = !isEmpty(data.long_url) ? data.long_url : "";
  data.user_id = !isEmpty(data.user_id) ? data.user_id : "";
  data.user_name = !isEmpty(data.user_name) ? data.user_name : "";
  data.user_email = !isEmpty(data.user_email) ? data.user_email : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.type = !isEmpty(data.type) ? data.type : "";
  data.meta = !isEmpty(data.meta) ? data.meta : "";
  req.body.module = data.type;
  if (isEmpty(data.long_url)) {
    errors.long_url = "long_url is required";
  }

  if (!validator.isURL(data.long_url)) {
    errors.long_url = "long_url is invalid";
  }

  if (isEmpty(data.name)) {
    errors.name = "name is required";
  }
  if (isEmpty(data.type)) {
    errors.type = "type is required";
  }
  if (data.type === "utm") {
    if (isEmpty(data.meta)) {
      errors.meta = "meta is required";
    }
  }
  if (isEmpty(data.user_id)) {
    errors.user_id = "user_id is required";
  }
  if (isEmpty(data.user_name)) {
    errors.user_name = "user_name is required";
  }
  if (isEmpty(data.user_email)) {
    errors.user_email = "user_email is required";
  }

  if (!isEmpty(errors)) {
    return res.status(400).json({ success: false, message: "vaildation error", data: errors });
  }
  next();
};

export const editOnelinkVal = (req, res, next) => {
  var data = req.body;
  console.log(data);
  let errors = {};
  data.long_url = !isEmpty(data.long_url) ? data.long_url : "";
  data.user_id = !isEmpty(data.user_id) ? data.user_id : "";
  data.user_name = !isEmpty(data.user_name) ? data.user_name : "";
  data.user_email = !isEmpty(data.user_email) ? data.user_email : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.type = !isEmpty(data.type) ? data.type : "";
  data.meta = !isEmpty(data.meta) ? data.meta : "";
  req.body.module = data.type;
  if (isEmpty(data.long_url)) {
    errors.long_url = "long_url is required";
  }

  if (!validator.isURL(data.long_url)) {
    errors.long_url = "long_url is invalid";
  }

  if (isEmpty(data.name)) {
    errors.name = "name is required";
  }
  if (isEmpty(data.type)) {
    errors.type = "type is required";
  }
  if (data.type === "utm") {
    if (isEmpty(data.meta)) {
      errors.meta = "meta is required";
    }
  }
  if (isEmpty(data.user_id)) {
    errors.user_id = "user_id is required";
  }
  if (isEmpty(data.user_name)) {
    errors.user_name = "user_name is required";
  }
  if (isEmpty(data.user_email)) {
    errors.user_email = "user_email is required";
  }

  if (!isEmpty(errors)) {
    return res.status(400).json({ success: false, message: "vaildation error", data: errors });
  }
  next();
};

export const deleteOnelinkVal = (req, res, next) => {
  var data = req.body;
  console.log(data);
  let errors = {};
  data.onelink_code = !isEmpty(data.onelink_code) ? data.onelink_code : "";
  data.user_id = !isEmpty(data.user_id) ? data.user_id : "";
  if (isEmpty(data.onelink_code)) {
    errors.onelink_code = "onelink_code is required";
  }
  if (isEmpty(data.user_id)) {
    errors.user_id = "user_id is required";
  }
  if (!isEmpty(errors)) {
    return res.status(400).json({ success: false, message: "vaildation error", data: errors });
  }
  next();
};
