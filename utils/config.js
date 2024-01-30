const config = {
  NODE_ENV: 'prod',
  PORT: 25060,
  db: {
    DB_HOST: 'connectwyzedb-do-user-15605333-0.c.db.ondigitalocean.com',
    DB_USER: 'doadmin',
    DB_PASS: 'AVNS_Ldx480qP1mOtiS0YWq3',
    DB_NAME: 'defaultdb',
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