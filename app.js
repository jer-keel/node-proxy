// Require the http module and the proxy module
var http      = require('http'),
    httpProxy = require('http-proxy'),
    routes    = require('./config/routes');

console.log(routes);
// Create the proxy
var proxy = httpProxy.createProxyServer({});

// Set the ip header
proxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('X-Proxy-Header', req.ip);
});

// Setup the proxy server and determine routing
var server = http.createServer(function(req, res) {
  var rqstUrl = req.headers.host;
  // console.log(rqstUrl);
  if(routes[rqstUrl]) {
    target_address = routes.ipaddress + routes[rqstUrl].target;
    proxy.web(req, res, { target: target_address });
  }
  else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.write("404: Not Found\n");
    res.end();
  }
});

// Check to see if an error has occurred
proxy.on('error', function(err, req, res) {
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.write('A server error occurred! Nothing is running at this address and port!');
  res.end();
});

// Determine the port number
var port = 3000;

// Start the Server
server.listen(process.env.PORT || port, process.env.IP || '0.0.0.0', function() {
  var address = server.address();
  console.log('Proxy server is running on ', address.address + ':' + address.port);
});
