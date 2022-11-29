const express = require('express');
const path = require('path');
const router = express.Router();

const UserRouter = require('./user');
const AuthRouter = require('./auth');

router.use('/v1/users', UserRouter);
router.use('/v1/auth', AuthRouter);

module.exports = router;