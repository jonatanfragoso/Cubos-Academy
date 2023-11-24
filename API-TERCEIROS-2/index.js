const express = require('express')

const app = express()

app.use(express.json())

const carros = [
    {
        modelo: 'S10',
        marca: 'Chevrolet'
    },
    {
        modelo: 'Fusion',
        marca: 'Ford'
    }
];

app.get('/', async (req, res) => {
    return res.json('olá da api 2, Porta 8001')
})

app.get('/carros', async (req, res) => {
    return res.json(carros)
})

app.post('/carros', async (req, res) => {
    const { modelo, marca } = req.body;

    carros.push({modelo: modelo, marca: marca});


    return res.json(carros)
})

app.listen(8001)