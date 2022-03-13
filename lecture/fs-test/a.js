const fs = require("fs")
fs.readFile('1.txt',"utf-8", function(err, data) { 
    if (err) { 
        console.error(err); 
    } else { 
        console.log(data); 
    } 
});