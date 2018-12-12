const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const morgan = require('morgan');
const flats = require('./controller/flats');

app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('tiny'));

app.use('/flats', flats);

app.listen(process.env.PORT);
