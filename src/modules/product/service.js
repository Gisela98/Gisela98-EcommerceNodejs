const getUser = require("../../middlewares/getUser");
const { Product } = require("./model");
const productValidation = require('./validation');


const ProductService = {

	async getProducts() {
		const products = await Product.findAll()

		return products;
	},

	async createProduct(header, body) {

		const user = await getUser(bearerHeader);

		const validateBody = productValidation.createProduct(body);

		if(validateBody.error) {
			throw new Error(validateBody.error);
		}

		const product = await Product.create(body);

		return product;
	}
}

module.exports = { ProductService };