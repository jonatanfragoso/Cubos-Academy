const jwt = require('jsonwebtoken')
const senhajwt = require('../senhajwt')
const pool = require('../conexao')
const verificarUsuarioLogado = async (req, res, next) => {
    const { authorization } = req.headers

	if (!authorization){
		return res.status(401).json({mensagem: 'Não autorizado.'})
	}

	const token = authorization.split(' ')[1];

    try {
        const { id } = await jwt.verify(token, senhajwt)

        const { rows, rowCount } = await pool.query('select * from usuarios where id = $1', [id])

        if (rowCount < 1){
            return res.status(404).json({mensagem: 'Usuário não encontrado.'})
        }

        req.usuario = rows[0]

        next()
        
    } catch (error) {
        return res.status(401).json({mensagem: 'Não autorizado.'})
    }
}

module.exports = {
    verificarUsuarioLogado
}