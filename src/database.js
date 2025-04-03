import knex from 'knex'; // Importa o knex para interagir com o banco de dados
import config from '../knexfile.js'; // Importa a informaçao do banco no knexfile.js


const db = knex(config.development); // Usa a configuração "development"


export default db; // Exporta a conexão com o banco de dados para o route
