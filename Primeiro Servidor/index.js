const teste = require('lodash');

const {arrayNumeros, arrayLetras} = require('./array.js');

console.log(arrayLetras);
console.log(arrayNumeros);

const arrayLetraUnica = teste.uniq(arrayLetras);

console.log(arrayLetraUnica);

const arrayNumeroUnico = teste.uniq(arrayNumeros);

console.log(arrayNumeroUnico);