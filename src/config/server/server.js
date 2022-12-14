const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc');

const config = require('../env')
const db = require('../connection/connectBD')
const swaggerDoc = require('../swagger/swaggerOptions');
const expressJWT = require('../JWT');

const Routes = require('../../routes')

const app = express();

app.use(express.json());
app.use(cors({
	origin: [
		'http://localhost:3000',
		'https://gisela98-ecommercenodejs-production.up.railway.app'
	],
	credentials: true
}))

const swaggerSpecs = swaggerJsDoc(swaggerDoc);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
app.use(expressJWT)

const port = config.port;

/**
 * @constructs express.Application Routes
 */
app.use(Routes);

app.set('port', port)


module.exports = app;