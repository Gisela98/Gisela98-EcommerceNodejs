const Joi = require('joi');

/**
 * @export
 * @class AuthValidation
 * 
 */
class AuthValidation {

   createAuth(body){
    const schema = Joi.object().keys({
      username: Joi.string().required(),
      email: Joi.string().email({ 
        minDomainSegments: 2,
      }).required(),
      password: Joi.string().required(),
    })

    return schema.validate(body)
  }

  updateAuth(body){
    const schema = Joi.object().keys({
      username: Joi.string(),
      email: Joi.string().email({ 
        minDomainSegments: 2,
      }),
      password: Joi.string(),
    })

    return schema.validate(body)
  }

  getAuth(body) {
  const schema = Joi.object().keys({
    email: Joi.string().email({ 
      minDomainSegments: 2,
    }).required(),
    password: Joi.string().required(),
  })


      return schema.validate(body);
  }
}
module.exports = new AuthValidation();