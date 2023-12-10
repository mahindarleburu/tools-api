import QRCode from 'qrcode'
export const createQrcode = async (req, res) => {
    try {
    console.log(req.body)
    const long_url = req.body.long_url;
    let data = {};
       const qrcodeSrc =  await QRCode.toDataURL(long_url)
        data.src = qrcodeSrc;
        return res
          .status(200)
          .json({ success: true, message: "Qrcode Generated success", data: data });
    
    } catch (errors) {
      return res
        .status(400)
        .json({ success: false, message: errors.toString(), data: errors });
    }
  };