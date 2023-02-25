const http = require("http");
const url = require("url");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    if (req.url == "/welcome") {
        res.writeHead(200, {
            "content-type": "text/plain"
        })

        res.end("Welcome to Dominos!");
    }
    else if (req.url == "/contact") {
        res.writeHead(200, {
            "content-type": "application/json"
        })
        res.end(JSON.stringify(
            {
                phone: "18602100000", 
                email: "guestcaredominos@jublfood.com",
            }
        ))
    } else {
        res.writeHead(404, {

        })
        res.end("Not Found")
    }
}
httpServer.listen(8081, ()=>{
    console.log("Server is listening at Port 8081")
});

module.exports = httpServer;