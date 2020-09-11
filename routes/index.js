var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hola' });
});
/* GET home page.
router.get('/:titulo/:datos', function(req, res, next) {
  res.render('index', { title: req.params.titulo, datos: req.params.datos });
});
 */
module.exports = router;
