const fs = require('fs');
fs.readFile('file.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);

    fs.appendFile('file.txt', '\nHello there again', function(err) {
        if (err) throw err;
        console.log('Saved!');
    });
});
const sourceFilePath = path.join(__dirname, 'temp', 'doit.txt');
const destDirPath = path.join(__dirname,'temp', 'direct');
const destFilePath = path.join(destDirPath, 'doit.txt');

fs.copyFile(sourceFilePath, destFilePath, (copyErr) => {
    if (copyErr) {
        console.error('Error copying file:', copyErr);
    } else {
        console.log('File copied successfully');
    }
});


const folderPath = path.join(__dirname, 'direct');
console.log('Folder path:', folderPath);
const filePath = path.join(__dirname, 'temp', 'doit.txt');
console.log('File path:', filePath);




const {read} = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html> <head><title>Node js Class</title></head><body>');
    res.write('<h1>Welcome to Node.js class heel</h1>');
    res.write('</body></html>');
    res.end();
});
const port = 3000;
const host = 'localhost';
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});