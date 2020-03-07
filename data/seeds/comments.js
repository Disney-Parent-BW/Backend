
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };

exports.const = comments = [
  {
    user_id: 1,
    request_id: 1,
    comment:  `I'll be there!`
  },
  {
    user_id: 2,
    request_id: 3,
    comment:  `I will be! See you then.`
  }
]

exports.seed = function(knex) {
  return knex('comments')
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert(comments);
    });};