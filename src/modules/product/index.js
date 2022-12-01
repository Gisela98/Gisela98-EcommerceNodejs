const { ProductService } = require('./service');

async function getAll(req, res, next) {
  try {
    const Auths = await ProductService.getProducts()
    
		res.status(200).json(Auths)
  } catch (error) {
    res.json(error.message)
  }
}

async function create(req, res, next){
  try {
    const getAuth = await ProductService.createProduct(req.headers['authorization'], req.body);
    res.status(201).json(getAuth)
  
  } catch (error) {
    res.json(error.message)
  }
}

module.exports = {
  getAll,
	create
}