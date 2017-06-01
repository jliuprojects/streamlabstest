const express = require('express');
const app = express();

// app.use(express.static(__dirname)); // change this later to maybe /public folder

app.get('/', function (req, res) {
  	res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  	console.log('Example app listening on port 3000!');
});