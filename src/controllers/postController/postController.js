const Post = require('../../models/PostsModel/PostsModel');


module.exports = {
  async  store(req, res) {
        try{
            const post = await Post.create(req.body)
            res.status(200).json({
                success: ['Texto Criado com sucesso!']
            })
        }
        catch(e) {
            res.status(400).json(e)
        }
    },

    async index(req, res) {
        try {
            const posts= await Post.findAll({
                attributes:['id','title', 'slug', 'author', 'desc', 'tipo', 'text', 'user_id']
            })
            if(!posts){
                return res.status(400).json({
                    Error: ['Não existe postagem!']
                })
            }
            
            res.status(200).json(posts)
        } catch (e) {
            res.status(400).json(e)
        }
    },
    async show(req, res) {
        const { id } = req.params;
        try {
            const posts= await Post.findByPk(id)
            if(!posts){
                return res.status(400).json({
                    Error: ['Não existe postagem!']
                })
            }
            
            res.status(200).json(posts)
        } catch (e) {
            res.status(400).json(e)
        }
    },
    async delete(req, res) {
        const { id } = req.params;
        try {
            const posts= await Post.findByPk(id)
            if(!posts){
                return res.status(400).json({
                    Error: ['Não existe postagem!']
                })
            }
            await posts.destroy()
            res.status(200).json({
                success:['Postagem exclúida com sucesso']
            })
        } catch (e) {
            res.status(400).json(e)
        }
    },
    async updated(req, res) {
        const { id } = req.params;
        
        try {
            const posts= await Post.findByPk(id)
            if(!posts){
                return res.status(400).json({
                    Error: ['Não existe postagem!']
                })
            }
            const newPost = await posts.update(req.body)
            res.status(200).json(newPost)
        } catch (e) {
            res.status(400).json(e)
        }
    },
    
    

}