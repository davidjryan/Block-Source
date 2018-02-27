// Update with your config settings.
module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/blocksource",
    migrations: {
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds/dev`
    },
    useNullAsDefault: true
  },

  test: {
    client: "pg",
    connection:
      process.env.DATABASE_URL || "postgres://localhost/blocksource_test",
    useNullAsDefault: true,
    migrations: {
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds/test`
    }
  },
  production: {
    client: "pg",
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    migrations: {
      directory: `${__dirname}/db/migrations`
    },
    useNullAsDefault: true
  }
};
