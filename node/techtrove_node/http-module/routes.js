const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.writeHead(200, {"content-type":"text/plain"})
        res.end("Home Page ");

    }else if (url === "/project"){
        res.writeHead(200,{"content-type": "text/plain"})
        res.end("Projects");
    }else {
        res.writeHead(404,{"content-type": "text/plain"});
        res.end("404");
    }
})

const port = 3000;
server.listen(port, ()=>{
    console.log(`server is now listining to port ${port}`)
});
