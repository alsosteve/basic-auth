'use strict';

// dependancies
const express = require('express');
const basicAuth = require('../middlewares/basicAuth');

// Prepare the express app
// const app = express();
const router = express.Router();

router.post('/signin', async (req, res) => {
  let response = {
    id: req.user.id,
    username: req.user.username,
  };
  res.send(response);
});

module.exports = router;