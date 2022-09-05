const path = require('path');
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
require("body-parser");

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./config/connection");

const router = require("./controllers");

const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

const myStore = new SequelizeStore({
  db: sequelize,
});

app.use(
  session({
    store: myStore,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 300000 },
  })
);

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
