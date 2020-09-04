var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var router = require('./routes/router.js');

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
//state
// Country.hasMany(State, { foreignKey: "country_id"});
// State.belongsTo(Country, { foreignKey: "country_id"});
// //city
// State.hasMany(City, {foreignKey: "state_id"});
// City.belongsTo(State, {foreignKey: "state_id"});
// //event
// Event.belongsTo(City, { foreignKey: "city_id" });
// City.hasMany(Event, { foreignKey: "city_id" });
// Event.belongsTo(Event_category, { foreignKey: "event_category_id"});
// Event_category.hasMany(Event, { foreignKey: "event_category_id", onDelete: 'CASCADE', hooks: true });
// //blogs
// Blogs_category_intermediate.belongsTo(Blogs, {foreignKey: "blogs_id", onDelete: 'cascade',onUpdate: 'cascade'});
// Blogs_category_intermediate.belongsTo(Blogs_category, {foreignKey: "blogs_category_id", onDelete: 'cascade', onUpdate: 'cascade'});
// Blogs.belongsToMany(Blogs_category, {through: Blogs_category_intermediate , foreignKey: "blogs_id", onDelete: 'cascade', onUpdate: 'cascade'});
// Blogs_category.belongsToMany(Blogs, {through: Blogs_category_intermediate, foreignKey: "blogs_category_id"});
// User.hasMany(Blogs, {foreignKey: "user_id"});
// Blogs.belongsTo(User, {foreignKey: "user_id"});
// //User
// User.belongsTo(Fitness_group, { foreignKey: "fitness_group_id"});
// Fitness_group.hasMany(User, {foreignKey: "fitness_group_id"});
// User.belongsTo(Company, { foreignKey: "company_id"});
// Company.hasMany(User, {foreignKey: "company_id"});
// User.belongsTo(City, { foreignKey: "city_id"});
// City.hasMany(User, {foreignKey: "city_id"});
// User.belongsTo(User_role, { foreignKey: "user_role_id"});
// User_role.hasMany(User, {foreignKey: "user_role_id"});
// //page
// Page.belongsTo(User, {foreignKey: "user_id"});
// User.hasMany(Page, {foreignKey: "user_id"});

// sequelizeInstance.sync({force:false});

// Add Authentication Route file with app
// app.use('/', Authrouter); 

//For set layouts of html view
// var expressLayouts = require('express-ejs-layouts');
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(expressLayouts);

// Add Route file with app
app.use('/', router); 

//server port
http.listen(3000, function(){
  console.log('listening on *:3000');
});
