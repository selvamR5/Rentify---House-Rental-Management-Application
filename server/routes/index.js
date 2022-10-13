var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/h', function(req, res, next) {
  res.render('index', { title: 'Mary' });
});

module.exports = router;
