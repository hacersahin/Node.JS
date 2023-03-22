var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "av.hacer@outlook.com",
    pass: "8991hacer.",
  },
});

var mailOption = 
{
  from: "av.hacer@outlook.com",
  to: "av.hacerdoganay@gmail.com",
  subject: "node.js ile mail atıyorum!",
  text: " cevap yaz"
};

transporter.sendMail(mailOption, function (err, info) {
  if (err) throw err;
  console.log("mail gönderildi" + info);
});
