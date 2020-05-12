const knex = require('knex')({
  client: 'mysql',

  //Conexión local
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'apchallenge_calendar',
  },
});

module.exports = knex;
