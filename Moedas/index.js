const fetch = require("node-fetch");



async function GetCoin() {
  const response = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL"
  );
  const data = await response.json();
  return data
}

async function loadCoin() {
  let list = []
  let data = await GetCoin();
  usdbrl = data.USDBRL.ask
  eurbrl = data.EURBRL.ask
  list.push(usdbrl)
  list.push(eurbrl)
    console.log(`Dolar atual: ${list[0]}\nEuro atual: ${list[1]}`)
}

loadCoin()