import isEmpty from "./isEmpty.js";
export const createSourceMediumVal = (req, res, next) => {
  var data = req.body;
  console.log(data);
  let errors = {};
  data.utmSourceId = !isEmpty(data.utmSourceId) ? data.utmSourceId : "";
  data.utmMediumId = !isEmpty(data.utmMediumId) ? data.utmMediumId : "";
  if (isEmpty(data.utmSourceId)) {
    errors.utmSourceId = "utmSourceId is required";
  }

  if (isEmpty(data.utmMediumId)) {
    errors.utmMediumId = "utmMediumId is required";
  }

  if (!isEmpty(errors)) {
    return res.status(400).json({ success: false, message: "vaildation error", data: errors });
  }
  next();
};

export const editSourceMediumVal = (req, res, next) => {
  var data = req.body;
  console.log(data);
  let errors = {};
  data.id = !isEmpty(data.id) ? data.id : "";
  data.utmSourceId = !isEmpty(data.utmSourceId) ? data.utmSourceId : "";
  data.utmMediumId = !isEmpty(data.utmMediumId) ? data.utmMediumId : "";
  if (isEmpty(data.id)) {
    errors.id = "name is required";
  }
  if (isEmpty(data.utmSourceId)) {
    errors.utmSourceId = "utmSourceId is required";
  }

  if (isEmpty(data.utmMediumId)) {
    errors.utmMediumId = "utmMediumId is required";
  }
  if (!isEmpty(errors)) {
    return res.status(400).json({ success: false, message: "vaildation error", data: errors });
  }
  next();
};

export const sourceMediumDeleteVal = (req, res, next) => {
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
