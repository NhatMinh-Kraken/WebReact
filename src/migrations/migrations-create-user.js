'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {

      IdUser: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Email: {
        type: Sequelize.STRING(50)
      },
      Password: {
        type: Sequelize.STRING(100)
      },
      FirstName: {
        type: Sequelize.STRING(20)
      },
      LastName: {
        type: Sequelize.STRING(20)
      },
      Address: {
        type: Sequelize.TEXT
      },
      Gender: {
        type: Sequelize.BOOLEAN
      },
      TypeRoleUser: {
        type: Sequelize.STRING
      },
      KeyRoleUser: {
        type: Sequelize.STRING
      },
      CreatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UpdatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};