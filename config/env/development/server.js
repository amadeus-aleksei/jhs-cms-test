module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array(
      env('NODE_ENV') === 'production'
        ? 'PROD_APP_KEYS'
        : 'DEV_APP_KEYS'
    ),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
