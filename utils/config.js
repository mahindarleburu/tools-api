import dotenv from 'dotenv'
dotenv.config()


const config = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  db: {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USERNAME,
    DB_PASS: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    dialect: 'mysql',
    dialectOptions: {
      useUTC: false,
    },
    timezone: '+08:00', 
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  auth: {
    secret: process.env.AUTH_KEY ? process.env.AUTH_KEY : "d96c0384e5dc5eec98e0a5febc93eaaeaf2b8049"
  },
  baseUrl: process.env.BASE_URL
};

export default config;