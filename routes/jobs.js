const express = require('express');
const router = express.Router();

const controller_job = require('../controller/controller_job');


router.get('/get-jobs', controller_job.get_jobs);
router.post('/add-job', controller_job.add_job);
router.post('/apply-job', controller_job.apply_job);
router.get('/job-applicants', controller_job.job_applicants);


module.exports = router;