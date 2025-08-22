const http =  require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    try {
        console.log("Request received:", req);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(` Hello from Node.js HTTP server! ${req}`);
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end("Internal Server Error");
        console.error("Error handling request:", error);
    }
})

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
