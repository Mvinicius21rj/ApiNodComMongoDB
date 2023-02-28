import app from './src/app.js'

// identificando a porta aberta ou a porta 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escutando na porta http://localhost:${port}`)
})