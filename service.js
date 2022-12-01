const getUser = require("./src/middlewares/getUser");
const { Product } = require("./src/modules/product/model");
const productValidation = require('./src/modules/product/validation');


const ProductService = {

	async getProducts() {
		const products = await Product.findAll()

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