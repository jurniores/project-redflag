const View = require("../../models/ViewsModel/ViewsModel");
const { updated } = require("../userControllers/useController");
const { search } = require("../../../Router");



module.exports = {
  async  index(req, res) {
        const views = await View.findAll()

        res.json(views)
    },


   async store(req, res) {
     try{
         const {id, id_post, view} = await View.create(req.body)
        
        res.json({id, id_post, view})
     } catch (e) {
         res.status(400).json({
            Errors: e.parent.sqlMessage
         })
     }
    },
    async updated (req, res) {
        try{
        const { id } = req.params;
        const views = await View.findByPk(id);
        if(!views){
            return res.json({
                 Errors: ['Views não existe']
             })
         }
        const newViews = await views.update(req.body)
        res.json(newViews)
        } catch (e) {
            res.status(400).json({
                Errors: ['Erro ao editar um view']
            })
        }
    } ,
    async delete (req, res) {
        try{
            const { id } = req.params;
            const views = await View.findByPk(id)
            if(!views){
                return res.json({
                     Errors: ['Views não existe']
                 })
             }
            views.destroy()

            res.json({
                success: ['Views Apagado com sucesso!']
            })
        } catch (e) {
            res.status(400).json({
                Errors: ['Erro ao apagar uma view']
            })
        }
    },
    async show (req, res) {
        try{
            const { id } = req.params;
            const views = await View.findByPk(id)
            if(!views){
               return res.json({
                    Errors: ['Views não existe']
                })
            }
            res.json(views)
        } catch (e) {
            res.status(400).json({
                Errors: ['Erro ao apagar uma view']
            })
        }
    },
    
}