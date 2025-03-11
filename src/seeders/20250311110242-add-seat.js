'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Seats', [
      {
        airplaneId: 1,
        row:2,
        col:"WIN3",
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        airplaneId: 1,
        row:8,
        col:"DL5",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneId: 2,
        row:10,
        col:"AIS7",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneId: 2,
        row:8,
        col:"G11",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
