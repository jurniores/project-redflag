const User = require('../../models/userModel');



module.exports = {
     async store(req,res){
        
        try{
            
            const user = await User.create(req.body)
            if(!user) {
                res.status(400).json({
                    Errors: ['Erro ao tentar criar um usuário']
                })
                return
            }
            const { password } = req.body;
            const {name, email, id } = user;
            res.status(200).json({ id, name, email, password });
        } catch (e) {
            res.status(400).json({
                erros: e.errors.map(err=>err.message)
            })
        }
    },

    async updated(req, res) {
        try{
            const { id } = req.params
            const user = await User.findByPk(id)
            if(!user) {
                res.status(400).json({
                    Errors: ['Usuário não existe!']
                })
                return
            }
           const { password } = req.body 
           const newUser =  await user.update(req.body)
           const {email, name} = newUser

            res.status(200).json({email, password, name})
        } catch(e) {
            res.status(400).json({
                Errors: e.errors.map(err=>err.message)
            })
        }
    }

}


