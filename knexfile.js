// Update with your config settings.

require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      database: process.env.DB_DEV_DATABASE,
      user: process.env.DB_DEV_USERNAME,
      password: process.env.DB_DEV_PASSWORD
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  testing: {
    client: 'pg',
    useNullAsDefault: true,
    connection:{
      database: process.env.DB_DEV_TEST_DATABASE,
      user: process.env.DB_DEV_USERNAME,
      password: process.env.DB_DEV_PASSWORD
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};