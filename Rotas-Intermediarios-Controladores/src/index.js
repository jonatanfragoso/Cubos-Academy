const express = require('express');
const { filtrarProfessores, encontrarUmProfessor, intermediarioDaRota } = require('./controller/professores')

const app = express();

const primeiroIntermediario = (req, res, next) => {
    console.log('passei no primeiro intermediário');    
    next();
}

app.use(primeiroIntermediario);

// http://localhost:8000/professores
app.get('/professores',intermediarioDaRota, filtrarProfessores);

// http://localhost:8000/professores/:id
app.get('/professores/:id', encontrarUmProfessor);


// porta utilizada
app.listen(8000);