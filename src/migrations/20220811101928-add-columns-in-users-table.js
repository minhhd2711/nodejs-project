'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'password', { type: Sequelize.STRING, allowNull: false });
    await queryInterface.addColumn('Users', 'phone_number', { type: Sequelize.STRING, allowNull: false });
    await queryInterface.addColumn('Users', 'email_verified', { type: Sequelize.BOOLEAN, defaultValue: false });
    await queryInterface.addColumn('Users', 'is_deleled', { type: Sequelize.BOOLEAN, defaultValue: false });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'password');
    await queryInterface.removeColumn('Users', 'phone_number');
    await queryInterface.removeColumn('Users', 'email_verified');
    await queryInterface.removeColumn('Users', 'is_deleled');
  }
};
