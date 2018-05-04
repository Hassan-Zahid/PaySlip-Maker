const path = require('path');
var express = require('express');
var router = express.Router();
var paySlipService = require(path.resolve('server/services/payslip.service'));

// routes
router.post('/create', create);
router.get('/fetch/', fetch);
module.exports = router;

function create(req, res) {
  paySlipService.create(req.body)
    .then(function () {
      res.sendStatus(200);
    })
    .catch(function (err) {
      res.status(400).send(err);
    });
}

function fetch(req, res) {
  paySlipService.fetch()
    .then(function (paySlips) {
      if (paySlips) {
        res.send(paySlips);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(function (err) {
      res.status(400).send(err);
    });
}
