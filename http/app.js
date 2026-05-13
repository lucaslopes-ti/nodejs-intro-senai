const http = require('http');

http.createServer(function (requisicao, resposta){
    resposta.end("<h1>Se estiver funcionando, mostre esse texto!</h1><h4>ass:Lucas Lopes</h4>");
}).listen(8181);
console.log("Servidor rodando na porta 8181");