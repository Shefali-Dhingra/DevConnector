const express = require('express');
const router = express.Router();

// @route GET api/users
// @description test route
// @access Public
//if access = public, no middelware tokens required to access it aka no access denied/ seperate authentication required

router.get('/', (req,res) => res.send('User route'));

module.exports = router;