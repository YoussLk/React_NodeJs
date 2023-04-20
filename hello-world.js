const { isUtf8 } = require("buffer");
const http=require("http");

http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    response.end('<h1>Hello Node!!!!</h1>\n');
}).listen(3000)

const fs=require("fs");
fs.writeFile('welcome.txt', 'Hello Node', function(err) {
    if (err) {
       return console.error(err);
    }});