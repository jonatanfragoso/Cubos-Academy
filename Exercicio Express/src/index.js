const express = require('express');

const app = express();

app.get('/usuarios', (req, res) =>{
    const usuarios = [
        { id: 11, nome: 'joao', idade: 23},
        { id: 2, nome: 'maria', idade: 18}
    ];
    res.send(usuarios);
});

app.listen(3000, () => {
    console.log('Servidor incializado na porta 3000');
});