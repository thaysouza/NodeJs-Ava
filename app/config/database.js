var mysql = require('mysql');

var connMySQL = function(){
    console.log("Conexão com bd estabelecida!");
    return connection =  mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'node_projeto'
    });
}



module.exports = function(){
    return connMySQL;
}