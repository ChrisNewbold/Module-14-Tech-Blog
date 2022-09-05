// set up the bulk create into the database using the json data
const sequelize = require('../config/connection');
const { User, Blog } = require('../models');
const mysql = require("mysql2")
const userData = require('./userData');
const blogData = require('./blogData');
// const con = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });
const databaseName = process.env.DB_NAME;
const seedUsers = require("./userData");
const seedBlog = require("./blogData");
const seedComments = require("./commentData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");
  await seedBlog();
  console.log("\n----- BLOGS SEEDED -----\n");
  await seedComments();
  console.log("\n----- COMMENTS SEEDED -----\n");
  process.exit(0);
};

// con.connect((err) => {
//   if (err) throw err;
//   con.query(`CREATE DATABASE IF NOT EXISTS ${databaseName}`, (err2) => {
//     if (err2) throw err2;
//   });
//   con.end();
//   console.log("CREATED DATABASE");
// });
seedAll();
