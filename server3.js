var fs = require('fs');

//create a file named myfile3.txt:
fs.writeFile('mytextfile.txt', 'I change the content',
    function (err) {
        if (err) throw err;
        console.log('Content changed!');
    });