const http = require('http');

const server = http.createServer(function(req, res) {

    res.writeHead(200,{'Content-Type': 'text/html'})

    res.end(` 
        <html>
            <body>
                <h1>my first html assignment</h1>
                <p>A new beginning for greater things</p>

            </body>

        </html> 
    `);
})
server.listen(9111, '127.0.0.1')
console.log("Project for the basic");


