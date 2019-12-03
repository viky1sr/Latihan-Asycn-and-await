var http = require('http');

let data_array = [10,20,30];
let data_object = {
   'nama' : 'Kepo',
   'kursus' : 'Laravel',
   'rating' : 8.7
};

var server = http.createServer(function(req,res) {
    console.log("Selamat datang to NodeJS")
});

server.listen(8000);

console.log("Server is runinng");
console.log(data_object.nama);
console.log(data_array[0]);

let JSON_data = JSON.stringify(data_object);