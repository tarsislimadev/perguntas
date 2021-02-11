module.exports = {
  database: [
    process.env.DBNAME || "postgres",
    process.env.DBUSER || "postgres",
    process.env.DBPASS || "postgres",
    {
      host: process.env.DBHOST || "postgres",
      port: process.env.DBPORT || "3000",
      dialect: process.env.DBTYPE || "postgres",
      logging: process.env.DBLOG || true ? console.info : () => { },
    },
  ],
  http: {
    port: process.env.PORT || "80",
  }
};
