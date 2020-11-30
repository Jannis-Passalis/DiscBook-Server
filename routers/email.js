const { Router } = require("express");
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const nodemailer = require("nodemailer");
require("dotenv").config();

const router = new Router();

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const { senderId, recieverId, album } = req.body;
    console.log("what is senderId", senderId);
    const sender = await User.findByPk(senderId);
    const reciever = await User.findByPk(recieverId);
    console.log("what is reciever", reciever);
    console.log("what is sender", sender);

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PASSWORD, // generated ethereal password
      },
    });

    let mailOptions = {
      from: "discbookinfo@gmail.com", // sender address
      to: reciever.email, // list of receivers
      subject: "Interested In your CD ✔", // Subject line
      text: `Hello ${reciever.name},
      the user ${sender.name} is interested in your CD ${album}.
      Is it still available? If so, please contact ${sender.name} through this email (${sender.email}).
      Kind regards,
      The DiscBook Team`, // plain text body
    };

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("error occurs");
      } else {
        console.log("email sent");
      }
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
