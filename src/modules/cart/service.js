const getUser = require('../../middlewares/getUser');
const { Product } = require('../product/model');
const { Cart } = require('./model');
const { ProductInCart } = require('./product-in-cart.model');
const cartValidation = require('./validation');

const CartService = {

	async getAllCarts(header) {

		const user = await getUser(header);

		const carts = await Cart.findAll({
			where: {
				userId: user.id
			}
		})

		return carts;
	},

	async addProductToCart(body) {

		const validate = cartValidation.addProductToCart(body)

		if(validate.error) throw new Error(validate.error);

		const product = await Product.findByPk(body.productId);

		if(product.quantity < body.quantity) throw new Error('no hay disponible este numero de productos')
		
		product.update({
			quantity: product.quantity - body.quantity,
		});
		
		if (!product) throw new Error('Product', body.productId, 'not found');

		body.price = product.price * body.quantity;

		const productCart = await ProductInCart.create(body);

		const cart = await Cart.findByPk(productCart.cartId);

		await cart.update({
			totalPrice: cart.totalPrice + productCart.price
		},{
			where: {
				id: productCart.cartId
		}})
		
		return productCart;
	},

	async getProductsOfCart(id) {

		const products = await ProductInCart.findAll({
			where: {
				cartId: id
			},
			include: [Product]
		})

		return products;
	},

	async createCart(header){
		const user = await getUser(header);

		const cart = await Cart.create({
			totalPrice: 0,
			userId: user.id
		})
	
		return cart;
	
	}

}

module.exports = {CartService};