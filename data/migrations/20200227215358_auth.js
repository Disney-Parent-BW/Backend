exports.up = function(knex) {
    return knex.schema.createTable('auth', table => {
      table
        .increments();
  
      table
        .varchar('username', 128).notNullable().unique();
  
      table
        .varchar('last_name', 255).notNullable();
  
      table
        .varchar('first_name', 255).notNullable();
  
      table
        .varchar('email', 128).notNullable().unique();
  
      table
        .varchar('password', 255).notNullable();
  
      table
        .varchar('role', 128).notNullable();
  
      table
        .timestamps(true, true);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('auth');
  };