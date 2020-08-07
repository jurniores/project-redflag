require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcryptjs = require("bcryptjs");
const User = require('../../models/UserModel/UserModel');


module.exports = {
    async login(req, res){
      try{
          //buscando o usuário no banco de dados
        const { email, password } = req.body;
        const user = await User.findOne({
            where:{email}
        })
        //verifica se o usuário existe
        if(!user){
            res.status(400).json({
                errors: ['Email não existe']
            })
            return 
        }
        //verificação de senha
        const senha = await user.passwordIsValid(password)

        if(!senha) {
            res.status(400).json({
                errors: ['Senha incorreta']
            })
            return 
        } 
        
        //criando token dos usuários
        const { id, name } = user
        const token = jwt.sign({name, id, email }, process.env.TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRATION
        })
        
        
        res.status(200).json({
            token,
            name: user.name,
            id, 
            email
        })
        
        
      } catch(e) {
          res.status(400).json({
              errors: e
          })
      } 
    }
}