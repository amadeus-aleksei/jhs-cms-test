module.exports = ({ env }) => ({
  url: env.array(
    env('NODE_ENV') === 'production'
      ? 'PROD_PUBLIC_URL'
      : 'DEV_PUBLIC_URL'
  ),
  proxy: true,
  dirs: {
    public: "/app/public",
  },
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
