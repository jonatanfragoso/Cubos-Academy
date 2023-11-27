const express = require('express')
const knex = require('./conexao')

const app = express()

app.use(express.json())

app.get('/medicamento', async (req, res) => {
    const medicamentos = await knex('farmacia').count('medicamento as medicamentos').debug();

    return res.json(medicamentos)
})

app.get('/idade', async (req, res) => {
    const menorIdade = await knex('usuarios').min('idade').debug();

    return res.json(menorIdade)
})

app.get('/categoria', async (req, res) => {
    const categorias = await knex('farmacia').select('categoria').sum('estoque').whereNotNull('categoria').groupBy('categoria').debug();

    return res.json(categorias)
})

app.get('/medicamento2', async (req, res) => {
    const medicamentos = await knex('farmacia').count('medicamento as medicamentos_sem_categoria').whereNull('categoria').debug();

    return res.json(medicamentos)
})

app.get('/categoria2', async (req, res) => {
    const categorias = await knex('farmacia').select('categoria').count().whereNotNull('categoria').groupBy('categoria').debug();

    return res.json(categorias)
})

app.get('/idade2', async (req, res) => {
    const categorias = await knex('usuarios').select('idade').count().where('idade', '>=', 18).groupBy('idade').debug();

    return res.json(categorias)
})


app.listen(3000)