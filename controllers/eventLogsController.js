import db from "../models/index.js";

const EventLogs = db.eventLogs
export const createEventLogs = async (payload) => {
    try {
        console.log(payload);
        const user_id = payload.user_id;
        const user_name = payload.user_name;
        const user_email = payload.user_email;
        const module = payload.module;
        const meta = payload;
        const platform =  payload.platform;
        const action =  payload.action;

        const data = await EventLogs.create({
          user_id: user_id,
          user_name: user_name,
          user_email:user_email,
          platform: platform,
          module: module,
          action:action,
          meta: meta,
        });
        return true
      } catch (errors) {
        return true
      }
};
