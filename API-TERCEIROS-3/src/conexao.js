const { Pool } = require('pg')

const pool = new Pool({
	host: 'localhost',
	port: 5432,
	user: 'postgres',
	password: 'root',
	database: 'aula_integracao_api_terceiros',
})

module.exports = pool
