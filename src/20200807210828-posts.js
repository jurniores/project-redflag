'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('posts',
     {
        id: {
          type: Sequelize.INTEGER,
          autoIncremet: true,
          primaryKey: true,
          allowNull: false
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false
        },
        text: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        slug: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        desc: {
          type: Sequelize.STRING,
          allowNull: false
        },
        author: {
          type: Sequelize.STRING,
        },
        typeText: {
          type: Sequelize.STRING,
          allowNull:false,
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

  down: async (queryInterface) => {
    
      return queryInterface.dropTable('users');
     
  }
};
