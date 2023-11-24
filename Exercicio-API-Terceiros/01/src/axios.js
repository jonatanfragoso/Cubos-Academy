const axios = require('axios')

const instanciaAxios = axios.create({
    baseURL: 'https://companyenrichment.abstractapi.com/v1/',
    params: {
        api_key: '1a495b6daa7c4938a9b0d2a65405a89a'
    }

})

module.exports = instanciaAxios