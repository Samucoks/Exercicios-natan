const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.get('/bandas', (req, res)=>{
    const bandas = [
        {
            banda:'Supercombo'
        },
        {
            banda:'Zimbra'
        },
        {
            banda:'Scatolove'
        },
        {
            banda:'Scalene'
        },
        {
            banda:'Banda do Mar'
        }
    ]
    res.send(bandas)
})

app.get('/', (req, res) => {
    const mensagem = 'Seja Bem Vindo ao meu primeiro backend'
    res.send(mensagem)
})














app.listen(4000, () => {
    console.log('Server running in http://Localhost:4000')
})