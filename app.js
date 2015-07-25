// Require the http module and the proxy module
var http      = require('http'),
    httpProxy = require('http-proxy'),
    url       = require('url');
    routes    = require('./config/routes');

console.log(routes);
// Create the proxy
var proxy = httpProxy.createProxyServer({});

// Setup the proxy server and determine routing
var server = http.createServer(function(req, res) {
  var rqstUrl = req.headers.host;
  console.log(rqstUrl);
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

// Determine the port number
var defaultPort = 3000;
if(isNaN(process.argv[2])) { process.argv[2] = defaultPort; }
var port = process.argv[2] || defaultPort;

// Start the Server
server.listen(process.env.PORT || port, process.env.IP || '0.0.0.0', function() {
  var address = server.address();
  console.log('Proxy server is running on ', address.address + ':' + address.port);
});
