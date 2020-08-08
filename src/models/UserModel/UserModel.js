const { Sequelize, Model} = require("sequelize");
const bcryptjs = require('bcryptjs');

module.exports = class User extends Model {
    static Init(sequelize) {
        super.init({
            name:{
                type: Sequelize.STRING,
                defaultValue:'',
                validate:{
                    len:{
                        args:[3,255],
                        msg:'O nome precisa ter de 3 a 255 caracteres'
                    }
                }
            },
            password_hash: {
                type: Sequelize.STRING,
                defaultValue:'',
            },
            email: {
                type: Sequelize.STRING,
                defaultValue:'',
                unique: {
                    args: true,
                    msg: 'Email já existe!'
                },
                validate:{
                    isEmail:{
                        msg:'Você precisa digitar um email válido'
                    }
                }
            },
            password: {
               type: Sequelize.VIRTUAL,
               defaultValue: '',
               validate: {
                   len: {
                       args: [6,55],
                       msg: 'A senha precisa ter entre 6 e 55 caracteres!'
                   }
               }

            }
        },{sequelize});
        this.addHook('beforeSave', async(user)=>{
            if(user.password) {
                user.password_hash = await bcryptjs.hash(user.password,8)
            }
        })
        return this;
    }
    passwordIsValid(password){
        return bcryptjs.compare(password, this.password_hash);
    }
    static associate(models){
        this.hasMany(models, { foreignKey: 'user_id'})
    }
}
