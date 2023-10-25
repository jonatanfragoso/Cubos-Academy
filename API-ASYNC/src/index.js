const express = require ('express');
const { getCityFromZipcode } = require('utils-playground');

const app = express();

app.get('/', async (req, res) => {
    const cidade = getCityFromZipcode('69918022');
    const cidade2 = getCityFromZipcode('44380000');

    const promise = await Promise.all([cidade, cidade2]);

    const [ resposta1, resposta2 ] =  promise

    
    // res.send(`A cidade encontrada foi: ${cidade}`);
    res.send(`A cidade encontrada foi: ${resposta1} e ${resposta2}`);

});

app.get('/cidade', async (req, res) => {
    const { cep } = req.query;
    const cidade = await getCityFromZipcode(cep);
    if (!cidade) {
        return res.send('CEP inválido.')
    }
    res.send(`A cidade encontrada foi: ${cidade}`);
});

app.listen(8000);