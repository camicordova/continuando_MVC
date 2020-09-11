var express = require('express');
var userController = require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  var users = await userController.lista_usuarios(req, res ,next);
  res.render('users',{users:users, title:'Lista de usuarios'});
});
router.post('/', function(req, res, next){
  userController.user_create(req, res, next);
});

module.exports = router;
