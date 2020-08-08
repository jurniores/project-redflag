module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'posts',
      'id',
      {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        
      },
    );
  },

  down: async () => {},
};
