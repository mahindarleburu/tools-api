import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import qrcodeRouter from "./routes/qrcodeRoute.js";
import onelinkRouter from "./routes/onelinkRoute.js";
import sourceRouter from "./routes/sourceRoute.js";
import mediumRouter from "./routes/mediumRoute.js";
import redirectController from "./routes/redirectRoute.js";
import sourceMediumRoute from "./routes/sourceMediumRoute.js";
import errorLogsRoute from "./routes/errorLogsRoute.js"
import config from "./utils/config.js";
import db from "./models/index.js";
import { authVerify } from "./utils/functions.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
try {
  await db.sequelize.authenticate();
  await db.sequelize.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
app.use("/", redirectController);
// verify header auth code is passing or not. if pass we will validate the token
app.use(authVerify);

app.use("/api/qrcode", qrcodeRouter);
app.use("/api/onelink", onelinkRouter);
app.use("/api/source", sourceRouter);
app.use("/api/medium", mediumRouter);
app.use("/api/source_medium", sourceMediumRoute);
app.use("/api/error_logger", errorLogsRoute);

app.listen(config.PORT, () => {
  console.log(`Connectwyze Service running on port ${config.PORT}`);
});
