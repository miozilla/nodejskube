// Import the built-in HTTP module
const http = require('http');

// Define request handler
const handleRequest = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
};

// Create and start the server on port 8080
const server = http.createServer(handleRequest);
server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
