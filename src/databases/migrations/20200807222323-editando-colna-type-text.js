module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'posts',
      'aluno_id',
      {
      
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'alunos',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        
      }
    );
  },

  down: async () => {},
};
