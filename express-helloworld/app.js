var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});
app.get('/mars', function (req, res) {
  res.send('vous êtes sur Mars\n');
});
app.get('/neptune', function (req, res) {
  res.send('vous êtes sur neptune\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

