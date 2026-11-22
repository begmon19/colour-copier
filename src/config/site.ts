export const SITE = {
  name: 'Colour Copier',
  title: 'Colour Copier | Photocopy Machine Rental in Malaysia',
  description:
    'Colour Copier is a business established in Malaysia specializing in renting photocopier machines for businesses and alike.',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://example.com',
  twitterHandle: '',
  socials: {},
} as const;

export type SiteConfig = typeof SITE;
