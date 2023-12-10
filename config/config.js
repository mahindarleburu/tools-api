import config from "../utils/config.js";

const database = {
  development: {
    username: config.db.DB_USER,
    password: config.db.DB_PASS,
    database: config.db.DB_NAME,
    host: config.db.DB_HOST,
    dialect: config.db.dialect,
  },
  test: {
    username: config.db.DB_USER,
    password: config.db.DB_PASS,
    database: config.db.DB_NAME,
    host: config.db.DB_HOST,
    dialect: config.db.dialect,
  },
  production: {
    username: config.db.DB_USER,
    password: config.db.DB_PASS,
    database: config.db.DB_NAME,
    host: config.db.DB_HOST,
    dialect: config.db.dialect,
  },
};

export default database;
