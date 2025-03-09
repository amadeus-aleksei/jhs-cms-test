module.exports = ({ env }) => {
  console.log('Database Config:', {
    DATABASE_URL: env('DATABASE_URL'),
    DATABASE_SSL: env.bool('DATABASE_SSL', false),
  });
  return (
    {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: env('DATABASE_URL'),
          ssl: env.bool('DATABASE_SSL', false) ? { rejectUnauthorized: false } : false,
        },
        pool: { min: 0, max: 10 },
      }
    }
  )
};
