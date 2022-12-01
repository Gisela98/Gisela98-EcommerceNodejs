const getUser = require('../../middlewares/getUser');
const { ProductInCart } = require('../cart/product-in-cart.model');
const { Product } = require('../product/model');
const { Order } = require('./model');
const { ProductInOrder } = require('./product-in-order.model');

const OrderService = {

	async getAllOrders(header) {

		const user = await getUser(header);

		const orders = await Order.findAll({
			where: {
				userId: user.id
			}
		})

		return orders;
	},

	async createOrder(header, cartId) {
		const user = await getUser(header);

		const productOrder = await ProductInCart.findAll({
			where: {
				cartId
			}
		});

		const order = await Order.create({
			totalPrice: 0,
			userId: user.id
		},{include: {all: true}})

		for (let i = 0; i < productOrder.length; i++) {
			await ProductInOrder.create({
				price: productOrder[i].price,
				quantity: productOrder[i].quantity,
				orderId: order.id,
				productId: productOrder[i].productId
			})

			await order.update({
				totalPrice: order.totalPrice + productOrder[i].price
			})
		}

		return order;
	},

	async getProductsOfOrder(id) {

		const products = await ProductInOrder.findAll({
			where: {
				orderId: id
			},
			include: [Product]
		})

		return products;
	},

	async completeOrder(orderId){
		await Order.update({
			status: true,
		}, {
			where: {
				id: orderId
			}
		})
	
		return 'ORDEN REALIZADA CON EXITO';
	
	}

}

module.exports = {OrderService};