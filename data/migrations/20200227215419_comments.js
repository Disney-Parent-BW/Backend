
// exports.up = function(knex) {
  
// };

// exports.down = function(knex) {
  
// };

exports.up = function(knex) {
    return knex.schema.createTable('comments', table => {
      table
        .increments('comment_id');
  
      table
        .integer('user_id')
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  
      table
        .integer('request_id')
        .unsigned()
        .references('request_id')
        .inTable('requests')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  
      table
        .varchar('comment', 255).notNullable();
  
      table
        .timestamps(true, true);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('comments');
  };