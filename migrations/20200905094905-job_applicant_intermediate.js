'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("job_applicant_intermediates", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      jobs_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'jobs',
          key: 'job_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      job_seeker_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'job_seekers',
          key: 'job_seeker_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("job_applicant_intermediates");
  }
};
