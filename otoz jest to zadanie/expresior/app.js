const express = require('express');
const app = express();
const port = 3000;
const wiki = require('./wiki.js');

app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.listen(port, function() {
  console.log(`slucha apki ${port}!`)
});

app.use('/wiki', wiki);