'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("jobs", {
      job_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      recruiter_id: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },
      profile: {
          type: Sequelize.STRING,
          allowNull: false
      },
      company: {
          type: Sequelize.STRING,
          allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("jobs");
  }
};
