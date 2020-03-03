
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

exports.const = requests = [
  {
    user_id: 3,
    meeting_place: 'Mad Tea Party',
    meeting_time: '10:45:00', // time format: hh:mm:ss, military time
    number_of_kids: 2,
    description: `childcare switch anyone?`
  },
  {
    user_id: 4,
    meeting_place: 'Pirates of the Caribbean',
    meeting_time: '12:30:00', // time format: hh:mm:ss, military time
    number_of_kids: 3,
    description: `Need someone to switch, please and thank you! :)`
  },
  {
    user_id: 5,
    meeting_place: 'Space Mountain',
    meeting_time: '15:00:00', // time format: hh:mm:ss, military time
    number_of_kids: 5,
    description: `Anyone available at 3?`
  }
]

exports.seed = function(knex) {
  return knex('requests')
    .then(function () {
      // Inserts seed entries
      return knex('requests').insert(requests);
    });
};