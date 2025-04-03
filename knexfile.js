// dados de configuração para o knex (banco de dados mysql)

const config = {
    development: {
      client: 'mysql',
      connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'bancoprod'
      }
    }
  };
  
  export default config; // Exporta a configuração para uso no database
  