
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

exports.const = users = [
  {
    username: "LCoffelt", // 1
    last_name:  "Coffelt",
    first_name: "Lorraine",
    email: 'LCoffelt@email.com',
    password: "$2b$10$zhdAOwev5Jmu0jpiGXc.Uu5wdUs6IICl3vspkaoe5rrNQIyi36n2y", // Nu8aixag8V
    role: "volunteer"
  },
  {
    username: "JLopez", // 2
    last_name:  "Lopez",
    first_name: "Jean",
    email: 'JLopez@email.com',
    password: "$2b$10$PFdHfI1Ob9AxeipLi/WC6ecgnYnMDGC2UTYocq/N7vCkqV0s/fhAe", // iTh9Ooci3
    role: "volunteer"
  },
  {
    username: "lambda", // 3
    last_name: "Lambda",
    first_name: "Lambda",
    email: 'lambda@email.com',
    password: "$2b$10$OsR7Ui2ccJGldqdpOyF1BOCdqdwA6HEZWSRbKM2ojfATUe43DRPkq", // L4mbd4
    role: "volunteer"
  },
  {
    username: "AReinhardt", // 4
    last_name:  "Reinhardt",
    first_name: "Amie",
    email: 'AReinhardt@email.com',
    password: "$2b$10$.lVS3YIWkrotmrOklD1fcOy0HcX0q.67kHmtLhgi0BeDsuaV5HbJq", // Daisei9ugoo
    role: "parent"
  },
  {
    username: "RMartin", // 5
    last_name:  "Martin",
    first_name: "Roy",
    email: 'RMartin@email.com',
    password: "$2b$10$5RGHC1tSC2FWAS0Q5w0LIuGTvA5gW1VqqTELyLVeUtWk6Qn0eoIA2", // Aen4xaeyo6m
    role: "parent"
  },
  {
    username: "HWaller", // 6
    last_name:  "Waller",
    first_name: "Henry",
    email: 'HWaller@email.com',
    password: "$2b$10$HYoDI004wrzTscmtcy2L3u.rAGobyw1oBReaaQCO/I9otoYCI/z7e", // oL4shish
    role: "parent"
  },
]


exports.seed = function(knex) {
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(users);
    });
};

// {
//   "username": "LCoffelt",
//   "last_name":  "Coffelt",
//   "first_name": "Lorraine",
//   "password": "Nu8aixag8V",
//   "role": "volunteer"
// }
// {
//   "username": "JLopez",
//   "last_name":  "Lopez",
//   "first_name": "Jean",
//   "password": "iTh9Ooci3",
//   "role": "volunteer"
// }
// {
//   "username": "AReinhardt",
//   "last_name":  "Reinhardt",
//   "first_name": "Amie",
//   "password": "Daisei9ugoo",
//   "role": "parent"
// }
// {
//   "username": "RMartin",
//   "last_name":  "Martin",
//   "first_name": "Roy",
//   "password": "Aen4xaeyo6m",
//   "role": "parent"
// }
// {
//   "username": "HWaller",
//   "last_name":  "Waller",
//   "first_name": "Henry",
//   "password": "oL4shish",
//   "role": "parent"
// }