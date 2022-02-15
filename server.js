const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors());

const transporter = nodemailer.createTransport({

  host: 'smtp.gmail.com',
  provider: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: '', // Enter here email address from which you want to send emails
    pass: '' // Enter here password for email account from which you want to send emails
  },
  tls: {
  rejectUnauthorized: true
  }
});

app.use(bodyParser.json());

app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use('/',(req,res,next) => {
//   res.send('<h1>Hellow</h1>');
//   let senderName = req.body.name;
//   console.log (senderName)

// })

app.post('/send', function (req, res) {

  let senderName = req.body.name;
  let senderEmail = req.body.email;
  let tel = req.body.tel;
  let msg = req.body.msg;

  let mailOptions = {
    to: 'oteumail', // Enter here the email address on which you want to send emails from your customers
    from: senderEmail,
    subject: 'Orçamento',
    text: msg,

  };

  if (senderName === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

  if (senderEmail === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

  if (tel === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

  if (msg === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }


  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log('error:   ', error);
      res.end('error');
    } else {
      console.log('Message sent: ', response);
      res.end('sent');
    }
  });
});

app.listen(port, function () {
  console.log('Express started on port: ', port);
});
