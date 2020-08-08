const { Sequelize, Model } = require('sequelize');


module.exports = class View extends Model {
    static Init(sequelize) {
        super.init({
            view: {
                type: Sequelize.STRING,
                defaultValue:'',
            },
            id_post: {
                type: Sequelize.INTEGER,
                defaultValue:''
            }
        },
            {sequelize})
    }
    
    static associate(models){
        this.belongsTo(models, { foreignKey: 'id_post'})
    }
    

    
}