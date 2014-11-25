var filelist = require('./filelist.js');

filelist(process.argv[2], process.argv[3], function(err, files){
	if(err){
		return console.error("ERROR: "+err);
	}
	files.forEach(function(file){
			console.log(file);
	});
});