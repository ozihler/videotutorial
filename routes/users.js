const express = require('express');
const {join} = require('path');
const mountMiddleware = require('./mount-middleware');
const mountRoutes = require('./mount-routes');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
