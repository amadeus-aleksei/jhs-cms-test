module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString:
        env('NODE_ENV') === 'production'
          ? env('PROD_DATABASE_URL')
          : env('DEV_DATABASE_URL'),
      ssl: env('NODE_ENV') === 'production' ? { rejectUnauthorized: false } : false,
    },
    pool: { min: 0, max: 10 },
  },
});
