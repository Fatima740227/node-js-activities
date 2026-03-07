var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    fs.readFile('message.txt', function(err, data) {
    res.write(data);
    res.end();
    });

}).listen(8080);

console.log("Server running at http://localhost:8080")