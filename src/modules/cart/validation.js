const Joi = require('joi');

class cartValidation {
		addProductToCart(body){
      const schema = Joi.object().keys({
        productId: Joi.string().required(),
				quantity: Joi.number().integer().required(),
				cartId: Joi.string().required()
      })

      return schema.validate(body)
    }

    getCart(id) {
      const schema = Joi.string().required();

      return schema.validate(id);
	  }
}
module.exports = new cartValidation();