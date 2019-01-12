const knex = require('knex')({
    client:'pg',
    cinnection: {
        host: 'localhost',
        database: 'todo_db'
    } 

})

module.exports = knex;