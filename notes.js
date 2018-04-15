
// in Knexfile:
// module.exports = {
//   development: {
//     client: 'pg', //postgres (sql variant)
//     connection: 'postgres://localhost/movie_junkies_dev'
//   }
// };

//IN INDEX.JS
const env = 'development' //object development
const config = require('./knexfile.js')[env] //env is 'development', in the knexfile.js. so config contains the object 'development'
const knex = require('knex')(config)
//pulling knex with the object development and saying the client is 'x flavor of sql', and the the connection is where we're running our database against
const sql = knex('movies').toString()//this is generation "select * from 'movies'" so that we ccan see it in the console below

console.log(sql)

knex.destroy()//if we don't close out connections then they just keep running so this ensures its gonna close.

knex('movies') //calling knex on table 'movies'
  .then((movies) => { //PROMISE!
    console.log(movies);
    knex.destroy(); //like \q in sql. gets us out
  })
  .catch((err) => {//catches error
    console.error(err);
    knex.destroy();
    process.exit(1); //sends an error if it doesn't exit?
  });
