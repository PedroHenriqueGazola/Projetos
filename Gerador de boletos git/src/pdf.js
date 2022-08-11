const fs = require('fs');
const fetch  = require('node-fetch');
const https = require('https');
const pfx = fs.readFileSync('../Inter API_Certificado.crt');
const pfxkey = fs.readFileSync('../Inter API_Chave.key');
const agent = https.Agent({ cert: pfx, key: pfxkey });


let nossoNumero = '00851906117';

fetch(`https://cdpj.partners.bancointer.com.br/cobranca/v2/boletos/${nossoNumero}/pdf`, {
    method: 'GET',
    agent,
    headers: {
      'Authorization':  'Bearer 15193995-1782-4aa3-9e68-059347a28a3c',
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'x-inter-conta-corrente': '14054310',
      'Accept-Encoding' : 'gzip, deflate, br'
      },
})
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(result => console.log(result))
  .catch(error => console.log('error', error));