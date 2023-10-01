const professores = require('../bancodedados')

const filtrarProfessores = (req, res) => {
    const { stack } = req.query
    let resultado = professores;

    console.log('cheguei no controlador de listagem do professor');

    if (stack){
        resultado = professores.filter((professor) =>{
            return professor.stack === stack;
        });
    }
    res.send(resultado);
}

const encontrarUmProfessor = (req, res) => {
    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(req.params.id);
    });
    return res.send(professorEncontrado);
}

const intermediarioDaRota = (req ,res, next)=>{
    console.log('passei no intermediário da rota')
    next();
}

module.exports = {
    filtrarProfessores,
    encontrarUmProfessor,
    intermediarioDaRota
}