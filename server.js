var http = require('http');

http.createServer(function(req, res) {
    res.write("Welcome to my first Node.js Server!")
    res.end();
}).listen(3000);

console.log("Server running at http://localhost:3000");
