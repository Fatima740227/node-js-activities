var fs = require('fs')

//Delete the file mynewfile.txt:
fs.unlink('./mytextfile.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});