// JSON Server module
const jsonServer = require('json-server');
const todos = require('./db/todos.json');

const PORT = 3000;

const db = {
  todos,
};

const server = jsonServer.create();
const router = jsonServer.router(db);
server.use(jsonServer.defaults({ static: __dirname + '/public' }));

// Set readOnly
server.use(jsonServer.defaults({ readOnly: false }));

// Avoid CORS issue
server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Add this before server.use(router)
server.use(
  // Add custom route here if needed
  jsonServer.rewriter({ '/api/*': '/$1' })
);

server.use(router);

server.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
  console.log(`API baseUrl: http://localhost:${PORT}/api`);
});

// Export the Server API
module.exports = server;
