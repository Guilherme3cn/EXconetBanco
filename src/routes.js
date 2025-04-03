import { Router } from "express"; // Importa o Router do Express
import db from './database.js'; // Importa a conexão com o banco

const routes = Router(); // Cria uma instância do Router


//rota raiz
routes.get('/', (req, res) => {
    res.send('Hello World!');
    });

//rota para verificar produtos
routes.get('/produtos', async (req, res) => {
        try {
          const produtos = await db('produtos'); // Busca todos os produtos
          res.send(produtos);
        } catch (error) {
          res.status(500).json({ erro: 'Erro ao buscar produtos', detalhe: error });
        }   }); 
    
//rota para adicionar produtos
routes.post('/produtos', async (req, res) => {
    const { nome, preco } = req.body; // Desestrutura os dados do corpo da requisição
  
    try {
      await db('produtos').insert({ nome, preco }); // Insere o produto no banco
      res.status(201).json({ mensagem: 'Produto adicionado com sucesso!' });
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao adicionar produto', detalhe: error });
    }
  });

    
export default routes; //exportando as rotas
