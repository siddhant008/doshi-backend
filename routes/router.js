const express = require('express');
const router = express.Router();

const jobSeekerRouter = require('./job_seeker');
const recruiterRouter = require('./recruiter');
const jobRouter = require('./jobs');

// Dashboard
// router.get('/', function (req, res) {
//     res.locals = {  title: 'Dashboard' };
//     res.render('Dashboard/dashboard');
// });
// 
router.use('/', jobSeekerRouter);

router.use('/', recruiterRouter);

router.use('/', jobRouter);

module.exports = router;
