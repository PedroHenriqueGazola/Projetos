const fs = require('fs');
const fetch  = require('node-fetch');
const https = require('https');
const pfx = fs.readFileSync('../Inter API_Certificado.crt');
const pfxkey = fs.readFileSync('../Inter API_Chave.key');
const agent = https.Agent({ cert: pfx, key: pfxkey });
const formato = require('../Formato.json');

var raw = formato;

fetch("https://cdpj.partners.bancointer.com.br/cobranca/v2/boletos", {
    method: 'POST',
    agent,
    headers: {
        'Authorization':  'Bearer 15193995-1782-4aa3-9e68-059347a28a3c',
        'Content-Type':  'application/json',
        'Accept':  '*/*',
        'x-inter-conta-corrente':  '14054310'
    },
    body: JSON.stringify(raw),
})
    .then(function (response) {
        if(response.ok){
            return response.json();
        } 
    }) 
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
//{
//   seuNumero: '44987914875',
//   nossoNumero: '00851906117',
//   codigoBarras: '07795906800000100000001112038428500851906117',
//   linhaDigitavel: '07790001161203842850908519061173590680000010000'
//}