//Importa o modulo do app
const app = require("./src/app");

// 3000, 3030, 3333, 6000, 6060, 8000, 8080
// Port vai receber a porta para o projeto
const PORT = 3000;


//Escutando a porta 
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`)
})