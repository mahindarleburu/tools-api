import config from "../utils/config.js";
import { Sequelize, DataTypes, Op } from "sequelize";
import ShortUrlModel from "./onelink.model.js";
import QrCodeAuditModel from "./auditLogs.model.js";
import UtmSourceModel from "./source.model.js";
import UtmMediumModel from "./medium.model.js";
import UtmSourceMediumMapping from "./source_medium_mapping.model.js";
import dotenv from 'dotenv'
import EventLogsModel from "./eventLogs.model.js";
import ErrorLogsModel from "./errorLogs.model.js";

dotenv.config()
const sequelize = new Sequelize(config.db.DB_NAME, config.db.DB_USER, config.db.DB_PASS, {
  host: config.db.DB_HOST,
  dialect: config.db.dialect,
  port: config.db.PORT,
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
  dialectOptions: {
    useUTC: false,
  },
  timezone: '+08:00', 
  poll: {
    max: config.db.pool.max,
    min: config.db.pool.min,
    acquire: config.db.pool.acquire,
    idle: config.db.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

db.oneLink = ShortUrlModel(sequelize, Sequelize, DataTypes);
db.OneLinkActivity = QrCodeAuditModel(sequelize, Sequelize, DataTypes);
db.utmSource = UtmSourceModel(sequelize, Sequelize, DataTypes);
db.utmMedium = UtmMediumModel(sequelize, Sequelize, DataTypes);
db.utmSourceMediumMapping = UtmSourceMediumMapping(sequelize, Sequelize, DataTypes);
db.eventLogs = EventLogsModel(sequelize, Sequelize, DataTypes);
db.ErrorLogs = ErrorLogsModel(sequelize, Sequelize, DataTypes); 


// 1 to Many Relation
db.oneLink.hasMany(db.OneLinkActivity, {
  foreignKey: "onelink_code",
  as: "onelink_activity",
});

db.OneLinkActivity.belongsTo(db.oneLink, {
  foreignKey: "onelink_code",
  as: "onelink",
});

db.utmSource.belongsToMany(db.utmMedium, {
  as:"utm_medium",
  through: db.utmSourceMediumMapping,
  // foreignKey: "utm_source_id", // replaces `utmSourceId`
  // otherKey: "utm_medium_id", // replaces `utmMediumId `
});
db.utmMedium.belongsToMany(db.utmSource, {
  as:"utm_source",
  through: db.utmSourceMediumMapping,
  // foreignKey: "utm_medium_id",// replaces `utmMediumId`
  // otherKey: "utm_source_id", // replaces `utmSourceId`
});
db.utmSourceMediumMapping.belongsTo(db.utmSource);
db.utmSourceMediumMapping.belongsTo(db.utmMedium);
db.utmSource.hasMany(db.utmSourceMediumMapping);
db.utmMedium.hasMany(db.utmSourceMediumMapping);

export default db;
