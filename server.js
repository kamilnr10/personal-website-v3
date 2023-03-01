const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});
transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {
  let mailOptions = {
    from: `${req.body.formValues.email}`,
    to: process.env.EMAIL,
    subject: `Message from: ${req.body.formValues.email}`,
    text: `${req.body.formValues.message}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// server used to send emails
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));
// console.log("node server");

// const contactEmail = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "kamil.nr10@gmail.com",
//     pass: "",
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("ready to send");
//   }
// });

// router.post("/contact", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message;
//   const mail = {
//     from: name,
//     to: "kamil.nr10@gmail.com",
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//     <p>Email: ${email}</p>
//     <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json({ code: 200, status: "Message Sent" });
//     }
//   });
// });
