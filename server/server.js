var http = require("http");

function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Test server");
    response.end();
}

http.createServer(onRequest).listen(8080);
console.log("Server has started");