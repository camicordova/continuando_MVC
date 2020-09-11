var User = require('../models/users');
const {
    response
} = require('../app');

exports.user_create = function (req, res, next) {
    if (req.body) {
        let items = req.body
        User.create(items, function (err, newUsers) {
            if (err) return res.json({
                error: err
            });
            res.redirect('/users');
        });
    } else {
        res.json({
            status: 'ERROR',
            message: 'Debe completar todos los campos'
        });
    }
}


function reemplazar_nombres(users) {
    var usersedited = users.map(function(usuario){
        var temp = usuario;
        if(temp.name.indexOf('ñ')!=-1||temp.name.indexOf('Ñ')!=-1){
            temp.name = temp.name.replace(/ñ/g,"nn").replace(/Ñ/g,"NN");
        }
        if(temp.lastname.indexOf('ñ')!=-1||temp.lastname.indexOf('Ñ')!=-1){
            temp.lastname = temp.lastname.replace(/ñ/g,"nn").replace(/Ñ/g,"NN");
        }
        
        return temp;
    });
    return usersedited;
}

exports.lista_usuarios = async function (req, res, next) {
    var users = await User.find({}).sort({'lastname':1,'name':1});
    return reemplazar_nombres(users);
}