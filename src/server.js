import express from 'express'; // Importa o Express (nao esquecer de instalar o express no terminal)
import cors from 'cors'; // Importa o CORS (nao esquecer de instalar o cors no terminal)
import routes from './routes.js'; // Importa as rotas de routes.js



// Configurações do servidor com cors
const port = process.env.PORT
const Host = process.env.HOST
const app = express(); // Cria uma instância do Express

// usando variaveis de ambiente
app.use(cors());
app.use(express.json());
app.use(routes)


// Inicia o servidor na porta indicada pelo arquivo .env
app.listen(port, Host, () => {
    console.log(`Server is running at http://${Host}:${port}`)
}
);