var http = require('http');
var bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var urls = [url1, url2, url3];

var counter = 0;
var results = {};

var getString = function(url){
	http.get(url, function(res){
		res.pipe(bl(function(err, data){
			if(err){
				return console.error(err);
			}
			results[url] = data.toString();

			if(counter === 2){
				printResults();
			}
			counter ++;
		}));
	});
};

var printResults = function(){
	console.log(results[url1]);
	console.log(results[url2]);
	console.log(results[url3]);
};

for(var url in urls){
	getString(urls[url]);
}