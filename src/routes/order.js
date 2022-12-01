const { Router } = require('express');
const { OrderComponent } = require('../components');

const router = Router();

/**
 * @swagger
 *  /v1/orders:
 *      get:
 *          summary: get all the orders;
 *          tags: ["Orders"]
 *          responses:
 *              200:
 *                  description: get orders successfully 
 *                  content:
 *                      application/json:
 *                          squema:
 *                              type: array
 *              401:
 *                  description: error in get orders
 */
	 router.get('/', OrderComponent.getAllOrders);

  /**
  * @swagger
  *  /v1/orders/{id}:
  *      post:
  *          summary: create a order to buy cart products
  *          tags: ["Orders"]
  *          responses:
  *              200:
  *                  description: create succesfully
  *              401:
  *                  description: bad request
	*          parameters: [
  *           {
  *              name: id,
  *              in: path,
  *              description: id of the cart for create the order,
  *              required: true,
  *              schema: {
  *                  type: string,
  *              }
  *           },
  *          ]
  */
  router.post('/:id', OrderComponent.createOrder);

   /**
  * @swagger
  *  /v1/orders/{id}:
  *      get:
  *          summary: get products of a order
  *          tags: ["Orders"]
  *          responses:
  *              200:
  *                  description: get products successfully
  *              401:
  *                  description: bad request
  *          parameters: [
  *           {
  *              name: id,
  *              in: path,
  *              description: id of the order,
  *              required: true,
  *              schema: {
  *                  type: string,
  *              }
  *           },
  *          ]
  */
 router.get('/:id', OrderComponent.getProductsOfOrder);

  /**
  * @swagger
  *  /v1/orders/{id}:
  *      put:
  *          summary: complete a order open
  *          tags: ["Orders"]
  *          responses:
  *              200:
  *                  description: orden completed successfully
  *              401:
  *                  description: bad request
  *          parameters: [
  *           {
  *              name: id,
  *              in: path,
  *              description: id of the order,
  *              required: true,
  *              schema: {
  *                  type: string,
  *              }
  *           },
  *          ]
  */
  router.put('/:id', OrderComponent.completeOrder);

	 /**
  * @swagger
  * tags:
  *  name: Orders
  *  description: endpoints for managing api Orders.
  * components:
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