const Usuario = require('../model/usuario.model');
const jwt = require('jsonwebtoken');
const helpers = require('../auth/encryp.auth');

module.exports = {

    registrarUsuario: async (req, res) => {
        const { password } = req.body;
        const newPassword = await helpers.encryptPassword(password);
        const user = await Usuario.create({
            email: req.body.email,
            password: newPassword
        })
        const token = await jwt.sign({_id: user.id}, 'secretkey');
        res.json(token);
    },

    loguearUsuario: async (req, res) => {
        const { email, password } = req.body;
        const user = await Usuario.findOne({where: {email: email}});
        if(!user) return res.status(401).send('correo no encontrado');
        const validPassword = await helpers.matchPassword(password, user.password);
        if(validPassword){
            const token = await jwt.sign({_id: user.id}, 'secretkey');
            res.json(token);
        };
    }
}