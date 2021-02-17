const {
  database: [database, username, password, { host, dialect }]
} = require('../config')

const config = {
  username,
  password,
  database,
  host,
  dialect
}

module.exports = {
  development: config,
  test: config,
  production: config
}
