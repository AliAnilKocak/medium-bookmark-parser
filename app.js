const cheerio = require('cheerio');
const fileUtil = require('./file_utils');
const getTemplate = require('./template');

const folderPath = './data';

const bookmarks = fileUtil.getFileNames(folderPath)
    .map(fileName => fileUtil.getFileContent(fileName, folderPath))
    .flatMap(fileContent => {
        const $ = cheerio.load(fileContent);
        return $('a').toArray().map(el => ({
            url: $(el).attr('href'),
            value: $(el).text().trim(),
            time: $(el).next().text().trim(),
        }));
    });

const html = getTemplate(`
  ${bookmarks.map(b => `
    <tr>
      <td><a href="${b.url}">${b.value}</a></td>
      <td>${b.time}</td>
    </tr>
  `).join('')}
`);

fileUtil.saveHTML(html, '.', 'bookmarks.html');