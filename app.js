var app = require('./app/config/server');

var rotaHome = require('./app/routes/home')(app);
var rotaHome = require('./app/routes/front')(app);
var rotaHome = require('./app/routes/back')(app);

 app.listen(3000,function(){
   console.log("Servidores rodando com Express!");
 });
