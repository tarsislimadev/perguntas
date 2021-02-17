const fs = require('fs')
const path = require('path')

const {
  database: [database, username, password, { host, dialect }]
} = require('./config')

const config = { username, password, database, host, dialect }
const json = { development: config, test: config, production: config }
const filename = path.resolve('config', 'config.json')

try {
  fs.readFileSync(filename)
} catch (error) {
  fs.writeFileSync(filename, JSON.stringify(json, null, 4))
}
