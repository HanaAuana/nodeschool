var net = require('net');

var date = new Date();

var server = net.createServer(function(socket){
	var hours = date.getHours();
	if(hours < 10){
		hours = "0"+hours;
	}
	var stamp = date.getFullYear() +"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+hours+":"+date.getMinutes()+"\n";
	socket.end(stamp);
});

server.listen(process.argv[2]);