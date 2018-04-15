const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

knex('movies')
  .then((movies) => {
    console.log(movies);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });


var moveArr = [{ title: 'Deadpool', duration: 123, rating: 'R', score: 10, is_3d: false}, { title: 'Snow White', duration: 102, rating: 'PG', is_3d: false}]


// knex('movies')
//   .insert({
//     title: req.body.title,
//     duration: req.body.duration,
//     is_3d: req.body.is_3d
//   })
//   .then((movies) => {
//     console.log(movies);
//     knex.destroy();
//   })
//   .catch((err) => {
//     console.error(err);
//     knex.destroy();
//     process.exit(1);
//   });


// knex('movies')
//   .update({
//     score: 11.0
//   }).where( 'title', 'Deadpool')
//   .then((movies) => {
//     console.log(movies);
//     knex.destroy();
//   })
//   .catch((err) => {
//     console.error(err);
//     knex.destroy();
//     process.exit(1);
//   });

knex('movies')
  .del()
  .where('id', 8)
  .then((movies) => {
    console.log(movies);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
