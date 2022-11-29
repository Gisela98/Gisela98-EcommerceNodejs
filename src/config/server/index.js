const http = require('http')
const app = require('./server')
const server = http.createServer(app)
const db = require('../connection/connectBD');

const port = app.get('port');

async function dbConnection(){
  try {
    await db.sequelize
    console.log('Database connect');
    server.listen(port, () => {
      console.log('APP LISTENING IN PORT: ',port);
    })
  } catch (error) {
      throw new Error(error.message)
  }
  
}

dbConnection()

module.exports = server;