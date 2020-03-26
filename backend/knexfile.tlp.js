// Update with your config settings.

module.exports = {
  development: {
    client: "",
    connection: {
      filename: ""
    }
  },

  staging: {
    client: "",
    connection: {
      database: "",
      user: "",
      password: ""
    },
    pool: {
      min: "",
      max: ""
    },
    migrations: {
      tableName: ""
    }
  },

  production: {
    client: "",
    connection: {
      database: "",
      user: "",
      password: ""
    },
    pool: {
      min: "",
      max: ""
    },
    migrations: {
      tableName: ""
    }
  }
};
