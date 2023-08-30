const express = require('express');
const usersRouter = express.Router();

// Home page route
usersRouter.get('/', (req, res) => {
    res.send('users');
  })

module.exports = usersRouter;