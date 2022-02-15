const express = require('express');
const cors = require('cors');

const app = express();

const whiteList = 'http://localhost:4200';

var corsOptionDelegate = (req,callback) => {
  var corOption;
  if (whiteList.indexOf(req.header('Origin'))!== -1) {
    corOption = {origin: true}
  } else {
    corOption = {origin: false}
  }
  callback (null,corOption)
}

exports.cors = cors();
exports.corsWithOptions = cors (corsOptionDelegate);
