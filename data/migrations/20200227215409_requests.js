
// exports.up = function(knex) {
  
// };

// exports.down = function(knex) {
  
// };

exports.up = function(knex) {
    return knex.schema
    
    .createTable('requests', table => {
      table
        .increments('request_id');
  
      table
        .integer('user_id')
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  
      table
        .varchar('meeting_place').notNullable();
  
      table
        .time('meeting_time', {precision: 0}).notNullable().defaultTo(knex.fn.now(0));
  
      table
        .integer('number_of_kids').notNullable();
  
      table
        .varchar('description').notNullable();
  
      table
        .boolean('complete').defaultTo(false);
  
      table
        .timestamps(true, true);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('requests');
  };