const { OrderService } = require("./service")

async function getAllOrders(req, res, next) {
	try {
		
		const orders = await OrderService.getAllOrders(req.headers['authorization']);

		res.json(orders);
	} catch (error) {
		res.status(400).json(error.message)
	}
}

async function createOrder(req, res, next) {
	try {
		
		const orders = await OrderService.createOrder(req.headers['authorization'], req.params.id);

		res.json(orders);
	} catch (error) {
		res.status(400).json(error.message)
	}
}

async function getProductsOfOrder(req, res, next) {
	try {
		
		const orders = await OrderService.getProductsOfOrder(req.params.id);

		res.json(orders);
	} catch (error) {
		res.status(400).json(error.message)
	}
}

async function completeOrder(req, res, next) {
	try {
		
		const cart = await OrderService.completeOrder(req.params.id)

		res.json(cart);
	} catch (error) {
		res.status(400).json(error.message);
	}
}

module.exports = {
	getAllOrders,
	createOrder,
	completeOrder,
	getProductsOfOrder
}