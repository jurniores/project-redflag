const User = require('../../models/UserModel/UserModel');
const Post = require('../../models/PostsModel/PostsModel');


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
                return res.status(400).json({
                    Errors: ['Usuário não existe!']
                })
                
            }
            if(user !== req.UserId) return
           const { password } = req.body 
           const newUser =  await user.update(req.body)
           const {email, name} = newUser

            res.status(200).json({email, password, name})
        } catch(e) {
            res.status(400).json({
                Errors: e.errors.map(err=>err.message)
            })
        }
    },

    async index(req, res) {
        try{
            const user = await User.findAll({
                attributes: ['id', 'email', 'name'],
                order: [['id','DESC']],
                include:{
                    model: Post,
                    order:[['id','DESC']],
                    attributes:['id','title','text', 'author','user_id' ]
                }
            })
            res.json(user)
        } catch (e) {
            res.json(e)
        }
        
    },
    async delete(req, res) {

        try{
            const { id } = req.params;
            const user = await User.findByPk(id)
            user.destroy()
            res.json({
                success: ['Usuário deletado com sucesso!']
            })
        } catch (e) {
            res.json(e)
        }
        
    }

}


