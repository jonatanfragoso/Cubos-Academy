const fs = require('fs/promises');

(async function(){
    const arquivoJson = await fs.readFile('./json/teste.json');

    const pessoas = JSON.parse(arquivoJson);

    pessoas.push({
        nome: "Jonatan",
        idade: 31
    });

    const arrayJson = JSON.stringify(pessoas);

    // console.log(arquivoJson.toString());
    console.log(arrayJson);
})();