const fs = require('fs');
const path = require('path');

const {
  database: [database, username, password, { host, dialect }],
} = require("./config");

const development = test = production = {
  username,
  password,
  database,
  host,
  dialect,
};
const config_file = { development, test, production };

const filename = path.resolve('config', 'config.json');

try {
  fs.readFileSync(filename);
} catch ({}) {
  fs.writeFileSync(filename, JSON.stringify(config_file, null, 4));
}
