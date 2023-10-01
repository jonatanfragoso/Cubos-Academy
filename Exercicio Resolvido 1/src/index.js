const express = require('express');
const carros = require('../bancodedados');

const app = express();

const intermerdiario = (req, res, next) => {
    let { senha } = req.query;

    if (senha) {
        if (senha === 'carros123'){
            return next();
        }
    }
    else{
        return res.send('Senha incorreta!');
    }
}

app.use(intermerdiario);

app.get('/listagem', (req, res) => {
    const {marca, cor} = req.query;
    let resultado = carros;

    if (marca) {
        resultado = resultado.filter((carro) => {
            return carro.marca === marca;
        });
    }

    if (cor) {
        resultado = resultado.filter((carro) => {
            return carro.cor === cor;
        });
    }

    res.send(resultado);
});

app.get('/listagem/:id', (req, res) => {
    const carroEncontrado = carros.find((carro) => {
        return carro.id === Number(req.params.id);
    });
    return res.send(carroEncontrado);
});




app.listen(8000);