var fs = require('fs');

//Read file into a Buffer given the filepath
var fileBuffer = fs.readFileSync(process.argv[2]);
//Convert Buffer into a String
var fileString = fileBuffer.toString();
//Convert String into an array, using newline char as the delimiter
var fileLines = fileString.split('\n');
//Get the number of lines, minus one to account for the last line having no newline char
var numLines = fileLines.length-1;

console.log(numLines);