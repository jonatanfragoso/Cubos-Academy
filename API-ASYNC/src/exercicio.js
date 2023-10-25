const express = require('express');

const { getCityFromZipcode, getPackageDescriptionNpm } = require('utils-playground');


const app = express();

app.get('/pacote/:nomePacote', async (req, res) => {
    const { nomePacote } = req.params;

    const descricaoPacote = await getPackageDescriptionNpm(nomePacote);

    return res.send(descricaoPacote);
})

app.listen(8000);
