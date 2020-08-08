'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.addColumn(
       'posts', 'tipo', {
         type: Sequelize.STRING,
         allowNull: false
       });
     
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.removeColumn(
      'posts', 'tipo');
     
  }
};
