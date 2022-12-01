const express = require('express');
const router = express.Router();

const AuthRouter = require('./auth');
const ProductRouter = require('./product');
const CartRouter = require('./cart');
const OrderRouter = require('./order');

router.use('/v1/auth', AuthRouter);
router.use('/v1/carts', CartRouter);
router.use('/v1/products', ProductRouter);
router.use('/v1/orders', OrderRouter);

module.exports = router;