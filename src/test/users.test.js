const AuthService = require('../modules/auth/service');
const {ProductService} = require('../modules/product/service');

describe('Testing User Endpoints', () => {
	test('Register one user', async () => {
		const user = await AuthService.signUp({
			username: "tester",
			email: "test@test.com",
			password: "Admin1",
		});
	
		expect(user).toHaveProperty('id');

		await user.destroy();

		user.save()
	}, 10000)
});

describe('Testing Product Endpoints', () => {
	test('Create Product', async() => {

		const token =  await AuthService.signIn({
			email: "admin1@mail.com",
			password: "Admin1"
		})

		const product = await ProductService.createProduct(`authorization ${token}`, {
			name: "test product",
  		price: 20,
  		availabilityQty: 12
		});

		expect(product).toHaveProperty('id');

		await product.destroy();

		product.save()

	})
	
	test('Get Products', async() => {

		const products = await ProductService.getProducts();

		products.forEach(product => {
			expect(product).toHaveProperty('id');
		});
	})
});

