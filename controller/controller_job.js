const Jobs = require("../models/jobs");
const Job_Seeker = require("../models/job_seeker");
const Job_applicant_intermediate = require('../models/job_applicant_intermediate');


exports.get_jobs = (req, res) => {
    Jobs.findAll({})
    .then((jobs) => {
      return res.json({
        status: 200,
        data: jobs,
        message: "jobs fetched successfully.",
      });
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
      return res.json({
        status: 500,
        data: err,
        message: "jobs fetching failed.",
      });
    });
};

exports.add_job = (req, res) => {
    Jobs.create({
        recruiter_id: req.body.recruiter_id,
        profile: req.body.profile,
        company: req.body.company
    })
    .then((jobs) => {
        return res.json({
            status: 200,
            message: "Job added succesfully",
        });
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
        return res.json({
            status: 500,
            data: err,
            message: "job adding failed.",
        });
    });
};

exports.apply_job = (req, res) => {
    Job_applicant_intermediate.create({
        job_id: req.body.job_id ,
        job_seeker_id: req.body.job_seeker_id
    })
    .then((job_applicant_intermediate) => {
        return res.json({
            status: 200,
            message: "Job Seeker applied succesfully",
        });
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
        return res.json({
            status: 500,
            data: err,
            message: "Job Seeker application failed.",
        });
    });
};

exports.job_applicants = (req, res) => {
    Job_Seeker.findAll({
        include: [
            {
                model: Job_applicant_intermediate,
            },
            {
                model: Jobs,
            },
        ],
    })
    .then((jobs) => {
      return res.json({
        status: 200,
        data: jobs,
        message: "jobs fetched successfully.",
      });
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
      return res.json({
        status: 500,
        data: err,
        message: "jobs fetching failed.",
      });
    });
};
