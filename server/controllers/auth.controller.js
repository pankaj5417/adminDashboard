const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/User.model");
const nodemailer = require("nodemailer");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

//signup

router.post("/register", async (req, res) => {
  try {
    //generate new hashed  password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // const hashedConfirmPassword = await bcrypt.hash(
    //   req.body.confirmPassword,
    //   salt
    // );
    // if (hashedPassword !== hashedConfirmPassword) {
    //   return res
    //     .status(401)
    //     .json("Password and confirm password should be same");
    // }

    const userExists = await User.findOne({ email: req.body.email });
    if (userExists)
      return res.status(400).json({
        status: "failed",
        message: " Please provide a different email address",
      });
    //create new user
    const newuser = await new User({
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
      password: hashedPassword,
      role:req.body.role

     
    });

    const token = jwt.sign({newuser}, process.env.JWT_SECRET_KEY);
    //save user and response
    const user = await newuser.save();
   return res.status(200).json({user,token});
  } catch (err) {
    console.log(err);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if(!validPassword){
     return res.status(400).json("wrong password");

    }

    const token = jwt.sign({user }, process.env.JWT_SECRET_KEY,);
    res.status(200).send({user,token});
  } catch (err) {
    console.log(err);
  }
});

//Forgot password

router.put("/forgotPassword", function (req, res) {
  const { email } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ error: "User with this mail does not exist" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.RESET_PASSWORD_KEY, {
      expiresIn: "20m",
    });
    var transporter = nodemailer.createTransport({
      // service: 'gmail',//smtp.gmail.com  //in place of service use host...

      // host: "smtp.mailtrap.io",
      service:"gmail",
      // port: 2525,
      auth: {
        user:"mr.pankajkumar1994@gmail.com",
        pass:""
        // user: "86f18df1253093",
        // pass: "eaae0c938819f0",
      },
    });

    var mailMessage = {
      from: "mr.pankajkumar1994@gmail.com",
      to: req.body.email,
      subject: "Password Reset",

      html: `
      <h2>Please click on given link to reset your password</h2>
      <p>${process.env.CLIENT_URL}/resetPassword/${token}</p>
      <a href=${process.env.CLIENT_URL}/resetPassword/${token}>resetlink</a>
      `,
    };
    return user.updateOne({ resetToken: token }, (err, success) => {
      if (err) {
        return res.status(400).json({ error: "reset password error" });
      } else {
        transporter.sendMail(mailMessage, function (error, info) {
          if (error) {
            return res.json({ error: error.message });
          }
          return res.json({
            message: "Email has been sent, kindly follow the instructions",
          });
        });
      }
    });
  });
});



module.exports = router;
