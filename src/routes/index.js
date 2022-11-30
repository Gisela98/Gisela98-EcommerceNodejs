const express = require('express');
const router = express.Router();

const AuthRouter = require('./auth');

router.use('/v1/auth', AuthRouter);

module.exports = router;