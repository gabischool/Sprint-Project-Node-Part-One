require('dotenv').config();

const server = require('./api/server.js');

// Create a port here and keep in mind you have to use locally and heroku

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
