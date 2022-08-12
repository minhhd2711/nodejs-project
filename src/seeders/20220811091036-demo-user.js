'use strict';

const { generatePassword } = require("../utils/crypto");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      first_name: 'John',
      last_name: 'Doe',
      email: 'example@example.com',
      password: generatePassword("abc@123"),
      phone_number: '0123456789',
      email_verified: true,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};