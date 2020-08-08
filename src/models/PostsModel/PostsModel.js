const { Model, Sequelize } = require("sequelize")


module.exports = class Posts extends Model {
    static Init(sequelize){
        super.init({
            title: {
                type: Sequelize.STRING,
                defaultValue:'',
            },
            slug: {
                type: Sequelize.STRING,
                defaultValue:'',
            },
            author: {
                type: Sequelize.STRING,
                defaultValue:'',
            },
            desc: {
                type: Sequelize.STRING,
                defaultValue:'',
            },
            tipo: {
                type: Sequelize.STRING,
                defaultValue:'',
            },
            text: {
                type: Sequelize.TEXT,
                defaultValue:'',
            },
            user_id: {
                type: Sequelize.INTEGER
            }
        },{sequelize})
        return this;
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id' })
        this.hasOne(models.Views, { foreignKey: 'id_post'})

    }
}