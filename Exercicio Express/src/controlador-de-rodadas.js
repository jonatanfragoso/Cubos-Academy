const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogadorDaVez = 0;

app.get('/', (req, res) =>{
    const nomeJogador = jogadores[jogadorDaVez];
    res.send(`É a vez de ${jogadores[jogadorDaVez]} jogar!`);
    jogadorDaVez++;
    if (jogadorDaVez >= jogadores.length) {
        jogadorDaVez =   0;
    }
});

app.listen(3000, () => {
    console.log('Servidor incializado na porta 3000');
});