const express = require('express')
const knex = require('./conexao')

const app = express()

app.use(express.json())

app.get('/', async (req, res) =>{
    let a = 5;
    let b = 2;

    // select * from agenda
    // const agenda = await knex('agenda').debug();
    // const agenda = await knex('agenda').whereIn('id', [1, 5]).debug();
    // const agenda = await knex('agenda').where({ id: 5}).debug();
    // const agenda = await knex('agenda').where({ id: 5 }).debug();
    // const agenda = await knex('agenda').where({ id: 5}).first().select('id', 'nome').debug();
    // const agenda = await knex('agenda').whereBetween('id', [5, 10]).orderBy('id', 'desc').debug();
    // const agenda = await knex('agenda').distinct('id','email', 'nome').whereNull('email').debug();
    // const agenda = await knex('agenda').select('email').groupBy('email').count().debug();
    // const agenda = await knex('agenda').limit(a).offset((a*b)).debug();
    // const agenda = await knex('agenda').whereNull('email').sum('id').debug();
    // const agenda = await knex('agenda').whereNull('email').avg('id').debug();
    // const agenda = await knex('agenda').whereNull('email').min('id').debug();
    // const agenda = await knex('agenda').whereNull('email').max('id').debug();

    

    return res.json(agenda)
})

app.listen(3000)