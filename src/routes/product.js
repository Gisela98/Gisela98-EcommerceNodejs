const { Router } = require('express');
const { ProductComponent } = require('../components');

const router = Router();


	/**
 * @swagger
 *  /v1/products:
 *      get:
 *          summary: get all the users;
 *          tags: ["Products"]
 *          responses:
 *              200:
 *                  description: get products successfully 
 *                  content:
 *                      application/json:
 *                          squema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 *              401:
 *                  description: error in get users
 */
  router.get('/', ProductComponent.getAll);

   /**
  * @swagger
  *  /v1/products:
  *      post:
  *          summary: create products
  *          tags: ["Products"]
  *          requestBody:
  *              required: true
  *              content:
  *                  application/json:
  *                      schema:
  *                          $ref: '#/components/schemas/Product'
  *          responses:
  *              200:
  *                  description: create succesfully
  *              401:
  *                  description: bad request
  */
  router.post('/', ProductComponent.create);


 /**
  * @swagger
  * tags:
  *  name: Products
  *  description: endpoints for managing api Products.
  * components:
  *  schemas:
  *      Product:
  *          type: object
  *          required:
  *              -name
  *              -price
  *              -availabilityQty
  *          properties:
  *              id:
  *                  type: string
  *              name:
  *                  type: string
  *              price:
  *                  type: number
  *              availabilityQty:
  *                  type: number
  *          example:
  *              name: hamburguesa
	*              price: 20
  *              availabilityQty: 12
	*/
 
 module.exports = router;