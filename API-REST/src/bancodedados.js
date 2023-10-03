const bancodedados = {
    identificadorInstrutor: 4,
    identificadorAula: 2,
    instrutores: [
        {
            id: 1,
            nome: "Jonatan",
            email: "jonatan@gmail.com",
            status: true
        },
        {
            id: 2,
            nome: "Daniel",
            email: "daniel@gmail.com",
            status: true
        },
        {
            id: 3,
            nome: "Marcela",
            email: "marcela@gmail.com",
            status: true
        }
    ],

    aulas: [
        {
            id: 1,
            instrutor_id: 1,
            titulo: "Primeiro Servidor",
            descricao: "Construindo o primeiro servidor"
        }
    ]
}


module.exports = bancodedados;