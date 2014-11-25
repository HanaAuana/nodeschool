var fs = require('fs');
var filepath = process.argv[2];

//Can pass 'utf8' as the second arg to get a String instead of a Buffer
var file = fs.readFile(filepath, function(err, data){
	if(!err){
		var lines = data.toString().split('\n').length-1;
		console.log(lines);
	}
});