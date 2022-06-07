const app = require("./src/app");
const PORT = 3000;
// 3000, 3030, 3333, 6000, 6060, 8000, 8080

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`)
})