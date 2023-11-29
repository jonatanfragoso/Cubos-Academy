const express = require('express')
const knex = require('./conexao')

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    const jonatan ={
        nome: 'Jonatan Fragoso 2',
        email: 'jonatanfragoso2@gmail.com',
        telefone: '(68) 9999-9999'
    }

    const joao ={
        nome: 'João Louco 2',
        email: 'joao2@gmail.com',
        telefone: '(68) 9999-9999'
    }

    // const agenda = await knex('agenda').insert(jonatan).returning(['id', 'nome'])
    const agenda = await knex('agenda').insert([jonatan, joao]).returning('*')
    return res.json(agenda)

})

app.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, telefone } = req.body

    const agendaAtualizada = await knex('agenda').update({ nome, email, telefone }).where({ id }).returning('*');

    return res.json(agendaAtualizada)
})

app.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const agendaExcluida = await knex('agenda').delete().where({ id });

    return res.json(agendaExcluida)
})

app.post('/:id/anotacoes', async (req, res) => {
    const { id } = req.params
    const { nota } = req.body
    
    const anotacao = await knex('anotacoes').insert({
        agenda_id: id,
        nota: nota
    }).returning('*')
    return res.json(anotacao)
})

app.get('/anotacoes', async (req, res) => {
    const anotacoes = await knex('anotacoes').join('agenda', 'anotacoes.agenda_id','=', 'agenda.id')
    .select('anotacoes.*', 'agenda.nome')

    // const anotacoes = await knex('anotacoes').leftJoin('agenda', 'anotacoes.agenda_id','=', 'agenda.id')
    // .select('anotacoes.*', 'agenda.nome').debug()

    // const anotacoes = await knex('anotacoes').rightJoin('agenda', 'anotacoes.agenda_id','=', 'agenda.id')
    // .select('anotacoes.*', 'agenda.nome').debug()
    return res.json(anotacoes)

})

app.listen(3000)