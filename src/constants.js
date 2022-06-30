const path = require('path');

module.exports = {
  'config': path.resolve(__dirname, 'config', 'database.json'),
  'models-path': path.resolve(__dirname,'db', 'models'),
  'seeders-path': path.resolve(__dirname, 'db', 'seeders'),
  'migrations-path': path.resolve(__dirname, 'db', 'migrations')
};