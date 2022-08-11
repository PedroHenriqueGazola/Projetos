const fs = require('fs');
const fetch  = require('node-fetch');
const https = require('https');
const pfx = fs.readFileSync('../Inter API_Certificado.crt');
const pfxkey = fs.readFileSync('../Inter API_Chave.key');
const agent = https.Agent({ cert: pfx, key: pfxkey });

let nossoNumero = '00851906117';

const motivo = {
    "motivoCancelamento": "APEDIDODOCLIENTE"
}


const token = "3cb040fa-0332-4a2b-a2c4-a6786ff5fcd5"

fetch(`https://cdpj.partners.bancointer.com.br/cobranca/v2/boletos/${nossoNumero}/cancelar`, {   
    method: 'POST',
    agent,
    headers: {
        'Authorization':  `Bearer ${token}`,
        'Content-Type':  'application/json',
        'Accept':  '*/*',
    },
    body: JSON.stringify(motivo),
}) 
    .then(function (response) {
        if(response.ok){
            return response.json();
        } 
    }
    )
    .then(result => console.log(result))
    .catch(error => console.log('error', error))