var fs = require('fs');
var path = require('path');

module.exports = function(filepath, ext, callback){
	var filtered =[];
	fs.readdir(filepath, function(err, files){
		if(err){
			return callback(err);
		}
		files = files.filter( function(file){
			return path.extname(file) === "."+ext;
		});
		callback(err, files);
	});
};


