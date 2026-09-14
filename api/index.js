module.exports = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello from Nodes!\n');
};