const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Node.js server is running");
});

server.listen(4800, () => {
  console.log("Server running on http://localhost:4800");
});
