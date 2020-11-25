"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Jannis Passalis",
          email: "pasalis13@hotmail.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          picture:
            "https://previews.123rf.com/images/djvstock/djvstock1411/djvstock141100430/33350649-hard-rock-graphic-design-vector-illustration.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Carlos Passalis",
          email: "carlos@carlos.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          picture:
            "https://cdn.freebiesupply.com/logos/large/2x/radiohead-logo-svg-vector.svg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
