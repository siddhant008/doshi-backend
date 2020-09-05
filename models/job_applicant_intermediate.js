const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


module.exports = sequelize.define("Job_applicant_intermediate", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    jobs_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    job_seeker_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

