'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.addColumn(
       'posts',
        'user_id',
        
        {

          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'users',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',

         
       });
     
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.removeColumn(
      'posts', 'id_user');
     
  }
}