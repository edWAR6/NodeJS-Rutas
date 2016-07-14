var http = require('http');
var Router = require('node-router');

var router = Router();
var route = router.push; 

route('GET', '/uno', function(req, res){
	console.log('Llamada al /uno');
	res.send('Hola mundo uno');
});

route('GET', '/dos', function(req, res){
	console.log('Llamada al /dos');
	res.send('Hola mundo dos');
});

var server = http.createServer(router);
server.listen(8000, function(){
	console.log('Server OK');
});