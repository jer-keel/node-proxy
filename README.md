# node-proxy

A simple NodeJS server that proxies url requests to certain ports. At
the moment this proxy only proxies to server processes that are running on the
same machine as this proxy. This means that you cannot map your personal url to
Google, for example.

## Installation

To install the proxy clone this repository, edit the routes.js file in the config
folder to the machine's ip address and the required url to port mappings, and then run the app.js file with
node. You can do this by typing these commands in order:
```
git clone https://github.com/jer-keel/node-proxy.git
cd node-proxy
npm install --production
vim config/routes.js (or any editor of your choice)
node app.js [optional port number]
```

## Tips and Tricks

To keep the proxy server up without having to worry about it going down try out
the [forever module](https://github.com/foreverjs/forever). Then start up the
proxy by running:
```
forever start app.js
```

Another neat NodeJS module that might be useful is [nodemon](https://github.com/remy/nodemon)
which restarts a server whenever a file change occurs. If you want to start the
proxy and add url mappings without having to manually restart this is a great
choice. After installed start the proxy by running:
```
nodemon app.js
```

It would be cool to combine these two, but I have yet to figure that out, maybe
somebody else has more time on their hands ;)

## License

This software is distributed under the MIT License. Feel free to read the full
text in the LICENSE file. In summary it says you can do whatever you want and
that I am not liable for any issues.
