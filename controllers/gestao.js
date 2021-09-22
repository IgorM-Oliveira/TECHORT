module.exports.gestao=function(server,req,res){
	
	if (req.session.loggedin) {
		var connection = server.config.dbConnection();
	   var umidadeModel = new server.model.umidadeDAO(connection);
	   
	   umidadeModel.getUmidade(function(error, result){
		   res.render('gestao.ejs',{umidade:result});
	   });
   }
   else{
	   res.redirect('/gestao');
   }
}

module.exports.logout=function(server, req, res){
	req.session.destroy();
	res.redirect('/');
}