const Joi = require('joi');

class productValidation {

    createProduct(body){
      const schema = Joi.object().keys({
        name: Joi.string().required(),
        price: Joi.number().required(),
				availabilityQty: Joi.number().integer().required()
      })

      return schema.validate(body)
    }

		updateProduct(body){
      const schema = Joi.object().keys({
        name: Joi.string(),
        price: Joi.number(),
				availabilityQty: Joi.number().integer()
      })

      return schema.validate(body)
    }

     getProduct(id) {
      const schema = Joi.string().required();

      return schema.validate(id);
  }
}
module.exports = new productValidation();