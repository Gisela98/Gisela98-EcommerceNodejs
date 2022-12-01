const Joi = require('joi');

class orderValidation {

		updateOrder(body){
      const schema = Joi.object().keys({
        name: Joi.string(),
        price: Joi.number(),
				availabilityQty: Joi.number().integer()
      })

      return schema.validate(body)
    }

     getOrder(id) {
      const schema = Joi.string().required();

      return schema.validate(id);
  }
}
module.exports = new orderValidation();