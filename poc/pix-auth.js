require('dotenv').config({ path: '../.env.homologacao' })

console.log(process.env.GN_ENV)

/*const https = require('https')
const axios = require('axios')
const fs = require('fs')

const apiProduction = 'https://api-pix.gerencianet.com.br'
const apiStaging = 'https://api-pix.gerencianet.com.br'

const baseUrl = process.env.GN_ENV === 'producao' ? apiProduction : apiStaging
const getToken = async () => {
    console.log('getToken', process.env.GN_ENV)
    
    const certificado = fs.readFileSync('../'+process.env.GN_CERTIFICADO)
    const credenciais = {
        client_id: process.env.GN_CLIENT_ID,
        client_secret: process.env.GN_CLIENT_SECRET,
    }

    const data = JSON.stringify({ greeting: 'cliente_credenciais'  })
    const dataCredenciais = credenciais.client_id + ':' + credenciais.client_secret
    const auth = Buffer.from(dataCredenciais).toString('base64')
    
    const agent = new https.Agent({
        pfx: certificado,
        passphrase:'',
    })

    const config = {
        method: 'POST',
        url: baseUrl + '/oauth/token',
        headers: {
            Authorization: 'Basic '+ auth,
            'Content-Type': 'application/json',
        },
        httpAgent: agent,
        data: data
    }

    const result = await axios(config)
    return(result.data)

}

const run = async () => {
    const token = await getToken()
    const accessToken = token.accessToken

    const certificado = fs.readFileSync('../'+process.env.GN_CERTIFICADO)
    const data = JSON.stringify({
        calendario: {
            expiracao: 3600
        },

        devedor: {
            cpf: '12345678909',
            nome: 'Mateus',
        },

        valor: {
            original: '130.50',
        }, 

        chave:'aaaa',// pelo app
        solicitacaoPagador: 'Cobrança dos serviços prestados'

      })
 
    const agent = new https.Agent({
        pfx: certificado,
        passphrase:'',
    })

    const config = {
        method: 'POST',
        url: baseUrl + '/v2/cob',
        headers: {
            Authorization: 'Bearer '+ accessToken,
            'Content-Type': 'application/json',
        },
        httpAgent: agent,
        data: data
    }

    const result = await axios(config)

    console.log(result)

}

run()*/
