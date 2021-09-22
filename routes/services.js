module.exports = function(server){
	server.get('/services',function(req,res){
		server.controllers.services.services(server,req,res)
	});
}