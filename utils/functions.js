import config from "./config.js";

export const convertLowercaseUnderscore = (value)=>{
   const lowercaseValue = value.toLowerCase();
   const removeUnderscore = lowercaseValue.replace(/ /g,"_");
   console.log(removeUnderscore)
   return removeUnderscore;
}

export const authVerify = (req, res, next)=> {
    if (!req.headers.martech_token) {
      return res.status(403).json({ success:false, message: "Access Denied", data:{} });
    }
    if( req.headers.martech_token!== config?.auth?.secret){
      return res.status(403).json({ success:false, message: "Access Denied", data:{} });
    }
    next();
  }