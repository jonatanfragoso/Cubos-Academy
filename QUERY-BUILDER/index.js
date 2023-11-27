const express = require('express')
const knex = require('./conexao')

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    const jonatan ={
        nome: 'Jonatan Fragoso 3',
        email: 'jonatanfragoso3@gmail.com',
        telefone: '(68) 9999-9999'
    }

    const joao ={
        nome: 'João Louco',
        email: 'joao@gmail.com',
        telefone: '(68) 9999-9999'
    }

    // const agenda = await knex('agenda').insert(jonatan).returning(['id', 'nome'])
    const agenda = await knex('agenda').insert([jonatan, joao]).returning('*')
    return res.json(agenda)

})




app.listen(3000)