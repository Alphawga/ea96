export const VERCEL_DOMAINS = {
  production: {
    'site1.com': {
      type: 'primary',
      redirect: 'www.site1.com',
    },
    'site2.com': {
      type: 'primary',
      redirect: 'www.site2.com',
    },
  },
  preview: {
    'dev.site1.com': {
      type: 'primary',
    },
    'dev.site2.com': {
      type: 'primary',
    },
  },
} 