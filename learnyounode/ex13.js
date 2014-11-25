var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
	var parsed = url.parse(req.url, true);
	var date = new Date(parsed.query.iso);

	
	if(parsed.pathname === '/api/parsetime'){
		res.writeHead(200, {'content-type': 'application/json'});
		res.end(JSON.stringify({'hour': date.getHours(),
				'minute': date.getMinutes(),
				'second': date.getSeconds()
		}) );
	}
	else if(parsed.pathname === '/api/unixtime'){
		res.writeHead(200, {'content-type': 'application/json'});
		res.end(JSON.stringify({'unixtime': date.getTime() }) );
	}
	else{
		res.writeHead(404);
		console.error("Invalid Resource: "+parsed.pathname);
	}
})

server.listen(process.argv[2]);