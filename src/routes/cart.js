const { Router } = require('express');
const { CartComponent } = require('../components');

const router = Router();

/**
 * @swagger
 *  /v1/carts:
 *      get:
 *          summary: get all the carts;
 *          tags: ["Carts"]
 *          responses:
 *              200:
 *                  description: get carts successfully 
 *                  content:
 *                      application/json:
 *                          squema:
 *                              type: array
 *              401:
 *                  description: error in get carts
 */
  router.get('/', CartComponent.getAllCarts);

  /**
  * @swagger
  *  /v1/carts/add-products:
  *      post:
  *          summary: add products to cart
  *          tags: ["Carts"]
  *          requestBody:
  *              required: true
  *              content:
  *                  application/json:
  *                      schema:
  *                          $ref: '#/components/schemas/ProductInCart'
  *          responses:
  *              200:
  *                  description: create succesfully
  *              401:
  *                  description: bad request
  */
  router.post('/add-products', CartComponent.addProductToCart);

   /**
  * @swagger
  *  /v1/carts/{id}:
  *      get:
  *          summary: get products of a cart
  *          tags: ["Carts"]
  *          responses:
  *              200:
  *                  description: update user successfully
  *              401:
  *                  description: user not authorized to update users
  *          parameters: [
  *           {
  *              name: id,
  *              in: path,
  *              description: id of the cart,
  *              required: true,
  *              schema: {
  *                  type: string,
  *              }
  *           },
  *          ]
  */
 
 router.get('/:id', CartComponent.getProductsOfCart);

  /**
  * @swagger
  *  /v1/carts/create:
  *      post:
  *          summary: add products to cart
  *          tags: ["Carts"]
  *          responses:
  *              200:
  *                  description: create succesfully
  *              401:
  *                  description: bad request
  */
   router.post('/create', CartComponent.createCart);



	 /**
  * @swagger
  * tags:
  *  name: Carts
  *  description: endpoints for managing api Carts.
  * components:
  *  schemas:
  *      ProductInCart:
  *          type: array
  *          required:
  *              -cartId
  *              -productId
  *              -quantity
  *          properties:
  *              id:
  *                  type: string
  *              quantity:
  *                  type: number
	*              productId:
	*                  type: string
  *              cartId:
	*                  type: string
  *          example:
  *              productId: productId
  *              cartId: cartId
  *              quantity: 3
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