import db from "../models/index.js";
import { BAD_REQUEST, NOT_FOUND, OK } from "../utils/httpErrorCodes.js";
const UtmSourceMediumMapping = db.utmSourceMediumMapping;
const UtmMedium = db.utmMedium;
const UtmSource = db.utmSource;
export const createUtmSourceMediumMapping = async (req, res) => {
  try {
    console.log(req.body);
    const utmSourceId = req.body.utmSourceId;
    const utmMediumId = req.body.utmMediumId;
    const data = await UtmSourceMediumMapping.create({ utmSourceId: utmSourceId, utmMediumId: utmMediumId });
    return res.status(OK).json({ success: true, message: "UtmSourceMediumMapping Generated success", data: data });
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const editUtmSourceMediumMapping = async (req, res) => {
  try {
    console.log(req.body);
    const utmSourceId = req.body.utmSourceId;
    const utmMediumId = req.body.utmMediumId;
    const id = req.body.id;
    const data = await UtmSourceMediumMapping.update(
      { utmSourceId: utmSourceId, utmMediumId: utmMediumId },
      {
        where: {
          id: id,
        },
      }
    );
    if (data[0] > 0) {
      return res.status(OK).json({ success: true, message: "SourceMedium updated success", data: data });
    } else {
      return res.status(NOT_FOUND).json({ success: false, message: "update failed given id not found", data: [] });
    }
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const deleteUtmSourceMediumMapping = async (req, res) => {
  try {
    console.log(req.body);
    const id = req.body.id;
    const data = await UtmSourceMediumMapping.destroy({
      where: {
        id: id,
      },
      force: true,
    });
    if (data) {
      return res.status(OK).json({ success: true, message: "UtmSourceMediumMapping deleted success", data: data });
    } else {
      return res
        .status(BAD_REQUEST)
        .json({ success: false, message: "no records available to delete with id", data: data });
    }
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};
export const listAllMediumBySource = async (req, res) => {
  try {
    console.log(req.body);
    const id = req.params.source_id;
    const data = await UtmSource.findAll({
      attributes: ['id', 'name', 'display_name'],
      order: [
        ['name', 'ASC'],
    ],
      include: [
        {
          model: UtmMedium,
          as: "utm_medium",
          attributes:["id", 'name', 'display_name'],
          through: {attributes: []},
          order: [
            ['name', 'ASC'],
        ]
        },
      ],
    });
    return res.status(OK).json({ success: true, message: "list all Generated success", data: data });
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const listAllMediumBySourceId = async (req, res) => {
  try {
    console.log(req.body);
    const id = req.params.source_id;
    const data = await UtmSource.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: UtmMedium,
          as: "utm_medium",
        },
      ],
      order: [["updated_at", "DESC"]]
    });
    return res.status(OK).json({ success: true, message: "list all Generated success", data: data });
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const listUtmSourceMediumMapping = async (req, res) => {
  try {
    console.log(req.body);
    let data = {};
    const response = await UtmSourceMediumMapping.findAll({
      include: [
        {
          model: UtmMedium,
          as: "utm_medium",
        },
        {
          model: UtmSource,
          as: "utm_source",
        },
      ],
      order: [["updated_at", "DESC"]]
    }
    );
    data = response;
    if (data) {
      return res.status(OK).json({ success: true, message: "list of sourcemedium", data: data });
    }
    return res.status(NOT_FOUND).json({ success: false, message: "list of sourcemedium not found", data: data });
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};

export const getUtmSourceMediumMappingByid = async (req, res) => {
  try {
    console.log(req.body);
    const id = req.params.id;
    const data = await UtmSourceMediumMapping.findOne({
      where: { id: id },
      include: [
        {
          model: UtmMedium,
          as: "utm_medium",
        },
        {
          model: UtmSource,
          as: "utm_source",
        },
      ],
      order: [["updated_at", "DESC"]]
    });
    if (data) {
      return res.status(OK).json({ success: true, message: "source_medium by id", data: data });
    }
    return res.status(NOT_FOUND).json({ success: false, message: "source_mediums not found", data: data });
  } catch (errors) {
    return res.status(BAD_REQUEST).json({ success: false, message: errors.toString(), data: errors });
  }
};
