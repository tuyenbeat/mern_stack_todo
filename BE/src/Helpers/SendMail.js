const nodemailer = require("nodemailer");

const SendMail = (mail, username, code) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
          user: process.env.USER_MAIL,
          pass: process.env.PASS_MAIL
        },
      });
      const link = `http://localhost:3000/user?username=${username}&key=${code}`
      return transporter.sendMail({
        from: '"TODOAPP" <tuyenbeat@gmail.com>', 
        to: `${mail}`,
        subject: "[TODOAPP] Xác thực tài khoản", 
        html: ` <div>
        Nhấn link để xác nhận tài khoản:
        <a href=${link} target="_blank" style="color: red;">Oke</a>
        </div>  `, 
      });
}

  module.exports =  SendMail