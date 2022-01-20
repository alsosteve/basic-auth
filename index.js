'use strict';

const { start } = require('./lib/server.js');
const { sequelize } = require('./lib/auth/models/users');
// const { db } = require('./lib/models');

const PORT = process.env.PORT || 3000;

// db.sync()
//   .then(() => start(PORT))
//   .catch(err => console.log(err));

sequelize.sync()
  .then(() => start(PORT))
  .catch(err => console.log(err));