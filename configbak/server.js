const fs = require('fs');
console.log('Does .env.development exist?', fs.existsSync('.env.development'));


require('dotenv').config({ path: '.env.development' });
console.log('Loaded ENV Variables:', process.env);

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['randomKey1', 'randomKey2', 'randomKey3', 'randomKey4']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
