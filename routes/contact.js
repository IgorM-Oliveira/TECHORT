module.exports = function(server){
	server.get('/contact',function(req,res){
		server.controllers.contact.contact(server,req,res)
	});
}