const { Pool } = require('pg')

const pool = new Pool({
	host: 'localhost',
	port: 5432,
	user: 'postgres',
	password: 'root',
	database: 'aula_autenticacao_criptografia',
})

module.exports = pool
