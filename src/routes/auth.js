const { Router } = require('express');
const { AuthComponent } = require('../components');

const router = Router();

 /**
  * @swagger
  *  /v1/auth/signIn:
  *      post:
  *          summary: login users
  *          security: [] # No security
  *          tags: ["Auths"]
  *          requestBody:
  *              required: true
  *              content:
  *                  application/json:
  *                      schema:
  *                          $ref: '#/components/schemas/login'
  *          responses:
  *              200:
  *                  description: login succesfully
  *              401:
  *                  description: user exists
  */
  router.post('/signIn', AuthComponent.signIn);

   /**
  * @swagger
  *  /v1/auth/signUp:
  *      post:
  *          summary: sign up users
  *          security: [] # No security
  *          tags: ["Auths"]
  *          requestBody:
  *              required: true
  *              content:
  *                  application/json:
  *                      schema:
  *                          $ref: '#/components/schemas/Auth'
  *          responses:
  *              200:
  *                  description: login succesfully
  *              401:
  *                  description: user exists
  */
    router.post('/signUp', AuthComponent.signUp);

 /**
  * @swagger
  *  /v1/auth/getUser:
  *      get:
  *          summary: get one user by header
  *          tags: ["Auths"]
  *          responses:
  *              200:
  *                  description: get user succefully  
  *              401:
  *                  description: invalid token
  */
 
  router.get('/getUser', AuthComponent.getUserAuth);

 /**
  * @swagger
  *  /v1/auth/forgotPassword:
  *      post:
  *          summary: forgot password users
  *          security: [] # No security
  *          tags: ["Auths"]
  *          requestBody:
  *              required: true
  *              content:
  *                  application/json:
  *                      schema:
  *                          $ref: '#/components/schemas/forgotPass'
  *          responses:
  *              200:
  *                  description: forgot password succesfully
  *              401:
  *                  description: user exists
  */
  router.post('/forgotPassword', AuthComponent.forgotPassword)

   /**
  * @swagger
  *  /v1/auth/newPassword:
  *      post:
  *          summary: new password users
  *          security: [] # No security
  *          tags: ["Auths"]
  *          requestBody:
  *              required: true
  *              content:
  *                  application/json:
  *                      schema:
  *                          $ref: '#/components/schemas/newPass'
  *          responses:
  *              200:
  *                  description: new password succesfully
  *              401:
  *                  description: user exists
  */
  router.post('/newPassword', AuthComponent.newPassword);

   /**
  * @swagger
  *  /v1/auth/update:
  *      put:
  *          summary: put user in the DB
  *          tags: ["Auths"]
  *          requestBody:
  *              required: true
  *              content:
  *                  application/json:
  *                      schema:
  *                           $ref: '#/components/schemas/Auth'
  *          responses:
  *              200:
  *                  description: update user successfully
  *              401:
  *                  description: user not authorized to update users
  */
 
 router.put('/update', AuthComponent.updateUser);


 /**
  * @swagger
  * tags:
  *  name: Auths
  *  description: endpoints for managing api Auths.
  * components:
  *  schemas:
  *      Auth:
  *          type: object
  *          required:
  *              -email
  *              -username
  *              -password
  *          properties:
  *              id:
  *                  type: string
  *              username:
  *                  type: string
  *              password:
  *                  type: string
  *              email:
  *                  type: string
  *          example:
  *              email: admin1@mail.com
  *              username: testAuth
  *              password: Admin1
  *      login:
  *          type: object
  *          required:
  *              -email
  *              -password
  *          properties:
  *              password:
  *                  type: string
  *              email:
  *                  type: string
  *          example:
  *              email: admin1@mail.com
  *              password: Admin1
  *      forgotPass:
  *          type: object
  *          required:
  *              -email
  *          properties:
  *              email:
  *                  type: string
  *          example:
  *              email: admin1@mail.com
  *      newPass:
  *          type: object
  *          required:
  *              -newPassword
  *              -token
  *          properties:
  *              newPassword:
  *                  type: string
  *              token:
  *                  type: string
  *          example:
  *              newPassword: pass1234
  *              token: mytokensalsk
  *      Error:    
  *          type: object
  *          required:
  *              -status
  *              -message
  *          properties:
  *              status: 
  *                  type: integer
  *                  description: HTTP status code
  *                  example: 400
  *              message:
  *                  type: string
  *                  description: Error description
  *                  example: entity no created
  */
 
 module.exports = router;