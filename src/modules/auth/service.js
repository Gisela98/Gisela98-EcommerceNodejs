const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const AuthValidation = require('./validation');
const { User } = require('../user/model');
const getUser = require('../../middlewares/getUser');
const sendMail = require('../../resources/send-mail');
const {TemplateSign} = require('../../resources/getTemplate');
const db = require('../../config/connection/connectBD');
const config = require('../../config/env');

sequelize = db.sequelize;

/**
 * @exports
 * @implements {Auth} model
 */
const AuthService = {

  /**
   * @exports
   * @param {*} body
   * @implements {Auth} model 
   */
   async signUp(body) {
    try {
      const validate = AuthValidation.createAuth(body);
      if (validate.error) {
        throw new Error(validate.error)
      }
      const validateUser = await User.findOne({
        where: {username: body.username}
      });
      const validateEmail = await User.findOne({
        where: {email: body.email}
      });
      if (validateUser) {
        throw new Error('el usuario ya está en uso...')
      }
      if (validateEmail) {
        throw new Error('el email ya está en uso...')
      }
      const dataUser = {
        email: body.email,
        username: body.username,
        firstName: body.firstName,
        lastName: body.lastName,
        password: bcrypt.hashSync(body.password, 10),
      }
      const createdAuth = await User.create(dataUser);
      let verificateUser = 'https://google.com'
      let contactLink = config.CONTACT_LINK;

      const emailFrom = config.MAIL_USER;
      const emailTo = body.email;
      const subject = 'Registro en Pos API'
      const textPrincipal = `te has registrado correctamete a conexion Pos, porfavor verifica tu cuenta en el siguiente link...`
      const html = TemplateSign(textPrincipal, body.username, verificateUser, contactLink)
      await sendMail('syscomp', emailFrom, emailTo, subject,html)
      return createdAuth;

    } catch (error) {
      throw new Error(error.message)
    }
  },
  
  async signIn(body){
    try {
      const validate = AuthValidation.getAuth(body);
      if (validate.error) {
        throw new Error(validate.error)
      }

      const user = await User.findOne({
        where: {email: body.email}
      })

      if (!user) {
        throw new Error('credenciales incorrectas')
      }
      const result = bcrypt.compareSync(body.password, user.password);
      if (!result) {
        throw new Error('credenciales incorrectas')
      }
      const dataToken = {
        id : user.id,
        isAdmin : user.isAdmin,
        isActive : user.isActive,
        typeUser: user.typeUser,
      }

      const token = jsonwebtoken.sign({dataToken}, config.JWT_SECRET);
      return token;

    } catch (error) {
      throw new Error(error.message)
    }
  },

  async forgotPassword(email){
    try {

      let message = 'revisa tu email para cambiar la contraseña'

      const user = await User.findOne({
        where: {email}
      })

      if (!user) {
        throw new Error(message)
      }

      const dataToken = {
        id : user.id
      }

      const token = jsonwebtoken.sign({dataToken}, config.JWT_PASS_SECRET);

      const emailFrom = config.MAIL_USER;
      const emailTo = user.email;
      const subject = 'recuperación contraseña'
      const textPrincipal = `Tu token para cambio de contraseña es: ${token}`
      
      await sendMail('syscomp', emailFrom, emailTo, subject, textPrincipal)

      return message;
      
    } catch (error) {
      throw new Error(error.message)
    }
  },

  async newPassword(newPassword, bearerHeader){
    try {
      const validateToken = jsonwebtoken.decode(bearerHeader, config.JWT_PASS_SECRET);
      console.log("🚀 ~ file: service.js ~ line 136 ~ newPassword ~ validateToken", validateToken)
      
      if (validateToken) {
        let newpass = bcrypt.hashSync(newPassword, 10);
  
        const changePassword = await User.update({
          password: newpass,
        }, {
          where: {id: validateToken.id}
        })
  
        return changePassword;
      } else {
        return 'token no valid'
      }
      
    } catch (error) {
      throw new Error(error.message)
    }
  },
  
  async getUserLog(bearerHeader){
    try {
      const user = await getUser(bearerHeader);
      if (!user) {
        throw new Error('token invalido...')
      }
      return user;
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

module.exports = AuthService;