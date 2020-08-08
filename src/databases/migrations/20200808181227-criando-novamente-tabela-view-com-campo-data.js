'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable(
       'views',
        { id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
         view: {
           type: Sequelize.INTEGER,
           allowNull:true
         },
         id_post:{
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'posts',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
         },
         date: {
           type: Sequelize.DATE,
           allowNull: false,
         },
         created_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: true,
        }
        });
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('views');
     
  }
};
