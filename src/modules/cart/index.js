const { CartService } = require("./service")

async function getAllCarts(req, res, next) {
	try {
		
		const carts = await CartService.getAllCarts(req.headers['authorization']);

		res.json(carts);
	} catch (error) {
		res.status(400).json(error.message)
	}
}

async function addProductToCart(req, res, next) {
	try {
		
		const carts = await CartService.addProductToCart(req.body);

		res.json(carts);
	} catch (error) {
		res.status(400).json(error.message)
	}
}

async function getProductsOfCart(req, res, next) {
	try {
		
		const carts = await CartService.getProductsOfCart(req.params.id);

		res.json(carts);
	} catch (error) {
		res.status(400).json(error.message)
	}
}

async function createCart(req, res, next) {
	try {
		
		const cart = await CartService.createCart(req.headers['authorization'])

		res.json(cart);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

module.exports = {
	getAllCarts,
	addProductToCart,
	createCart,
	getProductsOfCart
}