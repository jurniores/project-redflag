const jwt = require('jsonwebtoken');

const User = require('../models/UserModel/UserModel');





module.exports = async function required(req, res, next) {
    const { authorization } = req.headers;
    
    if(!authorization) {
       return res.json({
            Errors:["Faça login"]
        })
        
    }
    try{
    const [, token] = authorization.split(' ')
    const dados = jwt.verify(token, process.env.TOKEN_SECRET)
    const { name, id, email} = dados
    const user = await User.findOne({
        where: {
            id,
            email,
        },
    })

    if(!user) {
        return res.json({
            Errors:["Usuário não existe, faça login!"]
        })
    }
    req.userId = id
    req.userName = name
    req.userEmail = email

    next();
} catch (e) {
    return res.status(400).json({
        Errors:['Usuário inválido ou exprirado, faça login!']
    })
}
    
    
}