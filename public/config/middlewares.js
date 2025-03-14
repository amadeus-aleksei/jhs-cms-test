module.exports = ({ env }) => ([
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: env('NODE_ENV') === 'production'
        ? [
          'https://probablyawebsite.com/',
          'https://api.probablyawebsite.com/',
          'https://cms.probablyawebsite.com/',
        ]
        : ['http://localhost:5173'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
      headers: ['Content-Type', 'Authorization'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]);
