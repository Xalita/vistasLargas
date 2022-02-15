// const app = require('../nodeJS/app');
// const debug = require("debug")("node-angular");
// const http = require("http");




// const normalizePort = val => {
//   var port = parseInt(val, 10);

//   if (isNaN(port)) {
//     // named pipe
//     return val;
//   }

//   if (port >= 0) {
//     // port number
//     return port;
//   }

//   return false;
// };

// const onError = error => {
//   if (error.syscall !== "listen") {
//     throw error;
//   }
//   const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
//   switch (error.code) {
//     case "EACCES":
//       console.error(bind + " requires elevated privileges");
//       process.exit(1);
//       break;
//     case "EADDRINUSE":
//       console.error(bind + " is already in use");
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// };

// const onListening = () => {
//   const addr = server.address();
//   const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
//   debug("Listening on " + bind);
// };

// const port = normalizePort(process.env.PORT || "3000");
// app.set("port", port);

// const server = http.createServer(app);
// server.on("error", onError);
// server.on("listening", onListening);
// server.listen('Server on ' + port);


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
    user: 'brunofneferreira@gmail.com', // Enter here email address from which you want to send emails
    pass: 'sarapita88' // Enter here password for email account from which you want to send emails
  },
  tls: {
  rejectUnauthorized: false
  }
});

app.use(bodyParser.json());

app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',(req,res,next) => {
  res.sendFile(__dirname + '/vistasLargas/nodeJS/views/index.html ')
})

app.post('/send', function (req, res) {

  let senderName = req.body.name;
  let senderEmail = req.body.email;
  let tel = req.body.tel;
  let msg = req.body.msg;

  let mailOptions = {
    to: 'brunofneferreira@gmail.com', // Enter here the email address on which you want to send emails from your customers
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
      console.log(error);
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
