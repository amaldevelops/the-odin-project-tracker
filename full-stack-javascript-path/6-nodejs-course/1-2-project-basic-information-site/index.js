let http = require("http");
let fs = require("fs");
let url = require("url");

http
  .createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let fileName = "." + q.pathname + ".html";
    console.log("URL Path: " + q.pathname);

    if (q.pathname === "/") {
      fs.readFile("index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile(fileName, function (err, data) {
        if (err) {
          fs.readFile("404.html", function (err, data) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
          });
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          console.dir("Server Accessed from Browser");
          return res.end();
        }
      });
    }
  })
  .listen(8080);

console.log("Server Running on http://localhost:8080/");
