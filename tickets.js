var fs = require('fs');

var row = fs.readFileSync('row.xml', {encoding : 'utf8'});
var content = fs.readFileSync('content.xml', {encoding : 'utf8'});

var rows = [];

for (var i = 1; i < 2000; i += 2) {
  var r = row;
  r = r.replace('>0000<', '>' + i + '<').replace('>9999<', '>' + (i + 1) + '<');
  rows.push(r);
}

content = content.replace('<!--ROWS-->', rows.join('\n'));

fs.writeFileSync('odt/content.xml', content, {encoding : 'utf8'});
