const Post = require('../../models/PostsModel/PostsModel');
const View = require('../../models/ViewsModel/ViewsModel');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

module.exports = {
    async index(req, res) {
        const { id } = req.params;
        try {
            const posts= await Post.findAll({
                where: {user_id: id},
                attributes:['id','title', 'slug', 'author', 'desc', 'tipo', 'text', 'user_id'],
                order:[['id','desc']],
                include: {
                    model: View,
                    attributes: ['id', 'view', 'date','id_post']
                }
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
}