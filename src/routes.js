import { Router } from "express"; // Importa o Router do Express
import produtos from './prodcontrollers/prodcontroller.js'; // Importa o controlador de produtos

const routes = Router(); // Cria uma instância do Router


//rota raiz
routes.get('/', produtos.raiz); // Define a rota raiz que chama o controlador raiz

//rota para verificar produtos
routes.get('/produtos', produtos.listar); // Define a rota para verificar produtos

//rota para adicionar produtos
routes.post('/produtos', produtos.adicionar); // Define a rota para adicionar produtos

//rota para atualizar produtos
routes.put('/produtos/:id', produtos.atualizar); // Define a rota para atualizar produtos

//rota para deletar produtos
routes.delete('/produtos/:id', produtos.deletar); // Define a rota para deletar produtos

export default routes; //exportando as rotas
