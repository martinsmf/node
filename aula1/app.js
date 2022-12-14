// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
const axios = require('axios');
const { Pessoa } = require('./pessoa')

const { nome, sobrenome, falaNome } = require('./mod1')
console.log(nome, sobrenome)
falaNome();

const p1 = new Pessoa('Matheus');

console.log(p1);

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
  .then(response => console.log(response.data))
  .catch(e => console.log(e));