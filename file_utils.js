const fs = require('fs');
const path = require("path");

function saveHTML(html) {
    fs.writeFile('bookmarks.html', html, {encoding: 'utf-8'}, err => {
        if (err) {
            console.error('Error saving HTML file')
        } else {
            console.log('HTML file saved!');
        }
    });
}

function getFileContent(fileName, folderPath) {
    const filePath = path.join(folderPath, fileName);
    return fs.readFileSync(filePath, 'utf-8');
}

function getFileNames(folderPath) {
    return fs.readdirSync(folderPath);
}

module.exports = {saveHTML, getFileContent, getFileNames}