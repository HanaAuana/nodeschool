var http = require('http');

var url = process.argv[2];

http.get(url, function(res){
//Can call res.setEncoding('utf8') to get Strings instead of standard Buffers
	res.on('data', function(err, data){
		console.log(data.toString());
	});
	res.on('error', console.error);
});