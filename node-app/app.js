const http = require('http');
const routes = require('./routes');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end(routes.getMessage());
});

const PORT = 2000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
