const express = require('express')
const axios = require('axios')

const app = express()

const instanciaAxios = axios.create({
    baseURL: 'http://localhost:8001',

})

app.use(express.json())

app.get('/', async (req, res) => {
    const novoCarro = {
        modelo: 'Fusca',
        marca: 'Volkswagen'
    }

    const resultadosAxios = await instanciaAxios.post('/carros', novoCarro)
    

    return res.json(resultadosAxios.data)

})

app.listen(8000)