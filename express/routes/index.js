var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Início' });
});

router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'Sobre' });
});

router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Contato' });
});

module.exports = router;
