import isEmpty from "./isEmpty.js";
export const createMediumVal = (req, res, next) => {
  var data = req.body;
  console.log(data);
  let errors = {};
  data.display_name = !isEmpty(data.display_name) ? data.display_name : "";

  if (isEmpty(data.display_name)) {
    errors.display_name = "display_name is required";
  }


  if (!isEmpty(errors)) {
    return res.status(400).json({ success: false, message: "vaildation error", data: errors });
  }
  next();
};

export const editMediumVal = (req, res, next) => {
  var data = req.body;
  console.log(data);
  let errors = {};
  data.id = !isEmpty(data.id) ? data.id : "";
  data.display_name = !isEmpty(data.display_name) ? data.display_name : "";
  if (isEmpty(data.id)) {
    errors.id = "id is required";
  }

  if (isEmpty(data.display_name)) {
    errors.display_name = "display_name is required";
  }

  if (!isEmpty(errors)) {
    return res.status(400).json({ success: false, message: "vaildation error", data: errors });
  }
  next();
};

export const mediumDeleteVal = (req, res, next) => {
  var data = req.body;
  console.log(data);
  let errors = {};
  data.id = !isEmpty(data.id) ? data.id : "";
  if (isEmpty(data.id)) {
    errors.id = "id is required";
  }

  if (!isEmpty(errors)) {
    return res.status(400).json({ success: false, message: "vaildation error", data: errors });
  }
  next();
};
