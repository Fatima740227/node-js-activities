var fs = require('fs');

fs.writeFile('message.txt', 'This file content has been updated using Node.js!', function(err){
    if(err) throw err;
    console.log("File content has changed successfully!");
});