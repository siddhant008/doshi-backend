const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


module.exports = sequelize.define("Job_Seeker", {
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
    }
});
