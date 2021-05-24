const http = require('http');
const fs = require('fs');

const listener = function(req, res) {
    let { url } = req;
    if (url === '/') {
      url = 'index.html';
    }
    fs.readFile(`${__dirname}/public/${url}`, function(err, data) {
      res.writeHead(200);
      res.end(data);
    })
}

const server = http.createServer(listener);
server.listen(8000);