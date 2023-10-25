const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground');

// getCityFromZipcode('69918022').then((cidade) => {
//     console.log(cidade);
// }).catch((erro) => {
//     console.log(erro);
// })

// const cidade = getCityFromZipcode();

// cidade.then((cidade) => {
//     console.log(cidade);
// })

// cidade.catch((erro) => {
//     console.log(erro.message);
// })

// console.log(cidade);


// getCityFromZipcode('69918022').then((cidade) => {
//     console.log(cidade);
// }).catch((erro) => {
//     console.log(erro);
// })

// getStateFromZipcode('69918022').then((uf) => {
//     console.log(uf);
// }).catch((erro) => {
//     console.log(erro);
// })


// async / await
// (async function(){
//     const cidade = await getCityFromZipcode('69918022');
//     console.log(cidade);

//     const uf =  await getStateFromZipcode('69918022');
//     console.log(uf);

// })();

// //padrão normal
// async function teste (){
//     return
// }

// arrow function
const teste = async () => {
    const cidade = await getCityFromZipcode('69918022');
    console.log(cidade);

    const uf =  await getStateFromZipcode('69918022');
    console.log(uf);
}


teste()