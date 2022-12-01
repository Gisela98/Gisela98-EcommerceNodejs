const express = require('express');
const router = express.Router();

const AuthRouter = require('./auth');
const ProductRouter = require('./product');


router.use('/v1/auth', AuthRouter);
router.use('/v1/products', ProductRouter);


module.exports = router;