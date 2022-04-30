const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    res.write("POST");
    res.end();
  } else if (req.method === "GET") {
    res.write("GET");
    res.end();
  } else if (req.method === "PUT") {
    res.write("PUT");
    res.end();
  } else if (req.method === "PATCH") {
    res.write("PATCH");
    res.end();
  } else if (req.method === "DELETE") {
    res.write("DELETE");
    res.end();
  }
});

server.listen(3000);
