const fs=require("fs");
fs.writeFile('welcome.txt', 'Hello Node', function(err) {
    if (err) {
       return console.error(err);
    }});

    fs.writeFile('hello.txt', 'Hello Node 2 ', function(err) {
        if (err) {
           return console.error(err);
        }});

    const data =fs.readFileSync('hello.txt');
    console.log(data.toString());