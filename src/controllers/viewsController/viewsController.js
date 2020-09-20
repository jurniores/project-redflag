const View = require("../../models/ViewsModel/ViewsModel");
const { updated } = require("../userControllers/useController");
const { search } = require("../../../Router");



module.exports = {
  async  index(req, res) {
        const views = await View.findAll({
            attributes: ['id','view', 'id_post','date']
        })

        res.json(views)
    },


   async store(req, res) {
     try{
         const {id, id_post, view, date} = await View.create(req.body)
        
        res.json({id, id_post, view, date})
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
        await views.update(req.body)
        res.json('editado')
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
            const { view, id_post, date} = views
            res.json({ view, id_post, date})
        } catch (e) {
            res.status(400).json({
                Errors: ['Erro ao apagar uma view']
            })
        }
    },
    
}