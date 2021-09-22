var express = require('express'),
	consign = require('consign'),
    nodeMailer = require('nodemailer'),
	bodyParser = require('body-parser'),
	session = require('express-session');

    var app = express();
    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	app.use(session({
		secret: 'secret',
		resave: true,
		saveUninitialized: false
	}));

	
	var port = process.env.PORT || 3000;
	
		
	app.get('/', function (req, res) {
      res.render('index');
	});
	
	consign()

	.include('/routes')

	.then('/controllers')

	.then('config/dbConnection.js')

	.then('/model')

	.into(app);

    app.post('/send-email', function (req, res) {

		var transporter = nodeMailer.createTransport({
			service: 'Gmail',
			auth: {
				//Aqui eu criei um e-mail no Gmail (ele faz o papel do meu servidor de e-mail)
				user: 'empresahipotetica@gmail.com',
				pass: 'U37xwq*9'
				}
		});

		var mailOptions = {
			from: req.body.from, // AQUI VAI O ENDEREÇO PARA RESPONDER (que é extraído do formulário)
			to: 'igormatos55555@gmail.com', //AQUI VOCÊ COLOCO E-MAIL DO DESTINATÁRIOA DA MENSAGEM
			subject: req.body.subject, // AQUI VAI O TÍTULO DO E-MAIL (que é extraído do formulário)
			text: req.body.body, // AQUI VAI O CONTEÚDO DA MENSAGEM (que é extraído do formulário)
			nome_1: req.body.pri, // AQUI VAI NO PRIMEIRO NOME (que é extraído do formulário)
			nome_2: req.body.sug, // AQUI VAI O SEGUNDO NOME (que é extraído do formulário)
			html: '<p>'+'Remetente: '+ req.body.pri +' ' + req.body.sug +'</p>'+ req.body.from + '<p>'+'Mensagem: '+'</p>'+ req.body.body // AQUI VAI O ARQUIVO HTML QUE SERÁ ENVIADO PARA O DESTINATÁRIO DA MENSAGEM.
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log(info.envelope.from);
				res.redirect('/');
		});
	});
		
	app.post('/gestao', function (error, req, res) {
		var user = req.body.fq_name;
		var email = req.body.fq_email;
	
		if (user == 'Admin' && email == 'admin@gmail.com') {
			res.redirect('/gestao');
		}
		console.log(info.envelope.from);
			return console.log(error)
	})
	
	app.listen(port, function(){
		console.log('app is running at port: ',port);
	});


module.exports = app;