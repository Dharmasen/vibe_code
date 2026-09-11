const http = require('http');
const routes = require('./routes');;;

const PORT = 4000;.

/**
 * Process incoming requests
 * @param {Object} req
 * @param {Object} res
 */
const requestHandler = (req, res) => {
    try {
        const message = routes.getMessage();

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end(message);
    } catch (error) {
        res.writeHead(500, {
            'Content-Type': 'text/plain'
        });

        res.end('Internal Server Error');

        console.error('Error:', error.message);
    }
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log('--------------------------------');
    console.log('Server Status : Running');
    console.log(`Port          : ${PORT}`);
    console.log(`Address       : http://localhost:${PORT}`);
    console.log('--------------------------------');
});
`