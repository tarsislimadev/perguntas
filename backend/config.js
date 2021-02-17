module.exports = {
  database: {
    database: process.env.DBNAME || 'postgres',
    username: process.env.DBUSER || 'postgres',
    password: process.env.DBPASS || 'postgres',
    dialect: process.env.DBTYPE || 'postgres',
    hostname: process.env.DBHOST || 'postgres',
    port: process.env.DBPORT || '3000'
  },
  http: {
    port: process.env.PORT || '80'
  }
}
