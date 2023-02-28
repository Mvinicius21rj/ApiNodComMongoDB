const http = require("http")
const port = 3000;

const rotas = {
    '/': 'Curso de Node',
    '/livros': "Entrei na pag de livros",
    '/autores': 'Listagem de autores',
    '/editora': 'Entrei na pag de editora',
    '/sobre': 'Entrei na pag de sobre'
}

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Constent-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor escutando na porta http://localhost:${port}`)
})