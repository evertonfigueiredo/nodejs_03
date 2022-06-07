// Arquivo com informações principais de API
const express = require("express")
const app = express()

// Cors para simulação do cliente
const cors = require("cors")
app.use(cors())

// Usar o Body da requisição com JSON
app.use(express.json())

// Definir a rota principal do nosso projeto
const movieRoutes = require("./routes/moviesRoutes")

//Rota de acesso para a API
app.use("/movies", movieRoutes)

//Exporta o modulo
module.exports = app;

