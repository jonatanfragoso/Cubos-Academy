const express = require('express')
const knex = require('./conexao')

const app = express()

app.use(express.json())

app.get('/', async (req, res) =>{

    // select * from agenda
    // const agenda = await knex('agenda').debug();
    // const agenda = await knex('agenda').whereIn('id', [1, 5]).debug();
    // const agenda = await knex('agenda').where({ id: 5}).debug();
    // const agenda = await knex('agenda').where({ id: 5 }).debug();
    const agenda = await knex('agenda').where({ id: 5}).first().select('id', 'nome').debug();
    return res.json(agenda)
})

app.listen(3000)