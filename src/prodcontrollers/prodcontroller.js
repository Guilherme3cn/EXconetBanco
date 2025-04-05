import db from "../database.js"; // Importa a conexão com o banco de dados

const produtos = {

    // Controlador de produtos

    // Rota raiz
    async raiz(req, res) {
        res.send("Hello World!");
    },

    // Rota para buscar produtos
    async listar(req, res) {
        try {
            const produtos = await db("produtos"); // Busca todos os produtos
            res.send(produtos);
        } catch (error) {
            res.status(500).json({ erro: "Erro ao buscar produtos", detalhe: error });
        }
    },


    //rota para adicionar produtos
    async adicionar(req, res) {
        const { nome, preco } = req.body; // Desestrutura os dados do corpo da requisição

        try {
            await db('produtos').insert({ nome, preco }); // Insere o produto no banco
            res.status(201).json({ mensagem: 'Produto adicionado com sucesso!' });
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao adicionar produto', detalhe: error });
        }
    },

    //rota para atualizar produtos
    async atualizar(req, res) {
        const { id } = req.params; // Pega o ID do produto a ser atualizado
        const { nome, preco } = req.body; // Desestrutura os dados do corpo da requisição

        try {
            await db('produtos').where({ id }).update({ nome, preco }); // Atualiza o produto no banco
            res.json({ mensagem: 'Produto atualizado com sucesso!' });
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao atualizar produto', detalhe: error });
        }
    },

    //rota para deletar produtos
    async deletar(req, res) {
        const { id } = req.params; // Pega o ID do produto a ser deletado

        try {
            await db('produtos').where({ id }).del(); // Deleta o produto no banco
            res.json({ mensagem: 'Produto deletado com sucesso!' });
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao deletar produto', detalhe: error });
        }
    },

};



export default produtos; // Exporta o controlador para uso nas rotas