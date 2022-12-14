const { Op } = require('sequelize');

const getUser = require("../../middlewares/getUser");
const { User } = require('../user/model');
const { Product } = require("./model");
const productValidation = require('./validation');


const ProductService = {

	async getProducts() {
		const products = await Product.findAll({
			where: {
				availabilityQty: {
					[Op.gt]: 0
				}
			},
			include: [User]
		})

		return products;
	},

	async createProduct(header, body) {

		const user = await getUser(header);

		const validateBody = productValidation.createProduct(body);

		if(validateBody.error) {
			throw new Error(validateBody.error);
		}

		body.userId = user.id;

		const product = await Product.create(body);

		return product;
	},

	// async updateProduct() {

	// }
}

module.exports = { ProductService };