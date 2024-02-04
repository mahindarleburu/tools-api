import dotenv from 'dotenv'
dotenv.config()
const config = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  /** DATABASE */
  db: {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USERNAME,
    DB_PASS: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    dialect: 'mysql',
    dialectOptions: {
      useUTC: false,
    },
    timezone: '+08:00', 
    // pool is optional, it will be used for Sequelize connection pool configuration
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },

  /** AUTH KEY */
  auth: {
    secret: process.env.AUTH_KEY ? process.env.AUTH_KEY : "e5246b1bdaa7c2b1cc3d8f0e65f4c7bec26c3936"
  },
  baseUrl:process.env.BASE_URL
};

export default config;