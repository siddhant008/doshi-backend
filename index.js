const app = require('express')();
const express = require('express');
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const router = require('./routes/router.js');

const Job_applicant_intermediate = require('./models/job_applicant_intermediate');
const Jobs = require('./models/jobs');
const Job_Seeker = require('./models/job_seeker');


// console.log(__dirname );
// Access public folder from root
app.use('/public', express.static('public'));
app.use('/public', express.static('views'));

app.use(express.static('D:/ANGULAR/AdminPanel/uploads'));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    if(req.headers.origin != undefined)
        res.setHeader('Access-Control-Allow-origin', req.headers.origin);
    else
        res.setHeader('Access-Control-Allow-origin', '*'); 
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

// app.use(session({secret: 'secret', resave: false, saveUninitialized: true}));
//DB connection
let sequelizeInstance = require('./config/connection');

//Associations
Job_applicant_intermediate.belongsTo(Job_Seeker, {foreignKey: "job_seeker_id", onDelete: 'cascade', onUpdate: 'cascade'});
Job_applicant_intermediate.belongsTo(Jobs, {foreignKey: "jobs_id", onDelete: 'cascade',onUpdate: 'cascade'});
Jobs.belongsToMany(Job_Seeker, {through: Job_applicant_intermediate , foreignKey: "jobs_id"});
Job_Seeker.belongsToMany(Jobs, {through: Job_applicant_intermediate, foreignKey: "job_Seeker_id"});

// Add Route file with app
app.use('/', router); 

//server port
http.listen(3000, function(){
  console.log('listening on *:3000');
});
