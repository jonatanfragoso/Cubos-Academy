const express = require('express');
const { listarInstrutores,
        obterInstrutor,
        cadastrarInstrutor,
        atualizarInstrutor,
        atualizarStatus,
        deletarInstrutor,
    } = require('./controller/intrutores');

const { cadastrarAula,
        listarAulas,
        obterAula,
        listarAulasInstrutor
} = require('./controller/aulas')


const { instrutores } = require('./bancodedados');

const rotas = express();

rotas.get('/instrutores', listarInstrutores);
rotas.get('/instrutores/:id', obterInstrutor);
rotas.post('/instrutores', cadastrarInstrutor);
rotas.put('/instrutores/:id', atualizarInstrutor);
rotas.patch('/instrutores/:id/status', atualizarStatus);
rotas.delete('/instrutores/:id', deletarInstrutor);
rotas.post('/instrutores/:idInstrutor/aulas', cadastrarAula);
rotas.get('/aulas', listarAulas);
rotas.get('/aulas/:id', obterAula);
rotas.get('/instrutores/:idInstrutor/aulas', listarAulasInstrutor);


module.exports = rotas;