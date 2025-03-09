module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        provider: "local",
        jwtSecret: env('NODE_ENV') === 'production'
          ? env('PROD_JWT_SECRET')
          : env('DEV_JWT_SECRET'),
      },
    },
  });
  