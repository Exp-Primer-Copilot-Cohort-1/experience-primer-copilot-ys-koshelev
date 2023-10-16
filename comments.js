// Create web server
// 1. Create a web server
// 2. Listen for requests
// 3. Respond to requests

// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (req, res) {
    var url = req.url;
    var method = req.method;
    console.log(url);
    console.log(method);
    if (method === 'GET') {
        if (url === '/') {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write('<html><body><p>Home Page</p></body></html>');
            res.end();
        } else if (url === '/about') {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write('<html><body><p>About Page</p></body></html>');
            res.end();
        } else if (url === '/contact') {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write('<html><body><p>Contact Page</p></body></html>');
            res.end();
        } else {
            res.writeHead(404, {"Content-Type": "text/html"});
            res.write('<html><body><p>Page Not Found</p></body></html>');
            res.end();
        }
    } else if (method === 'POST') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write('<html><body><p>POST Request Received</p></body></html>');
        res.end();
    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write('<html><body><p>Page Not Found</p></body></html>');
        res.end();
    }
});

// Listen on port 8000, IP defaults to