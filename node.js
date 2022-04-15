const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    res.write("POST");
  } else if (req.method === "GET") {
    res.write("GET");
  } else if (req.method === "PUT") {
    res.write("PUT");
  } else if (req.method === "PATCH") {
    res.write("PATCH");
  } else if (req.method === "DELETE") {
    res.write("DELETE");
  }
  res.end();
});

server.listen(3000);
