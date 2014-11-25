var express = require('express');
var fs = require('fs');

var app = express();



app.get('/books', function(req, res){
	var filepath = process.argv[3];
	var file = fs.readFile(filepath, function(err, result){
		var object = JSON.parse(result);
		res.json(object);
	})
})

app.listen(process.argv[2]);