const http = require('node:http');

const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello from Nodes,js!\n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
