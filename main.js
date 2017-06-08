var fs = require("fs");

var options = {
   host: 'localhost',
   port: '1337',
   path: 'input.txt.rtf'  
};

fs.readFile('input.txt.rtf', function (err, data) {
   if (err){
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("Program Ended");