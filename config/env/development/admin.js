module.exports = ({ env }) => ({
  auth: {
    secret:
      env('NODE_ENV') === 'production'
        ? env('PROD_JWT_SECRET')
        : env('DEV_JWT_SECRET'),
  },
  apiToken: {
    salt:
      env('NODE_ENV') === 'production'
        ? env('PROD_API_TOKEN_SALT')
        : env('DEV_API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt:
        env('NODE_ENV') === 'production'
          ? env('PROD_TRANSFER_TOKEN_SALT')
          : env('DEV_TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
