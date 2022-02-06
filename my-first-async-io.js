var fs = require('fs');
var str = fs.readFile(process.argv[2],'utf8',function(err,data){
    var lendata = data.split("\n").length;
    console.log(lendata-1); 
});