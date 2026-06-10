export const CONTACT_EMAIL = 'contact@any-gym.com';

export const HERO_APP_SCREENSHOTS = [
  'https://res.cloudinary.com/njh101010/image/upload/v1780935709/anygym/website/screenshots/app1.png',
  'https://res.cloudinary.com/njh101010/image/upload/v1780935709/anygym/website/screenshots/app2.png',
  'https://res.cloudinary.com/njh101010/image/upload/v1780935708/anygym/website/screenshots/app3.png',
] as const;

export const ADMIN_SCREENSHOTS = [
  {
    src: 'https://res.cloudinary.com/njh101010/image/upload/v1780949268/anygym/website/screenshots/admin-dashboard.png',
    alt: 'anygym admin dashboard',
  },
  {
    src: 'https://res.cloudinary.com/njh101010/image/upload/v1780949268/anygym/website/screenshots/admin-revenue.png',
    alt: 'anygym revenue analytics',
  },
  {
    src: 'https://res.cloudinary.com/njh101010/image/upload/v1780949268/anygym/website/screenshots/admin-gyms.png',
    alt: 'anygym gym management',
  },
] as const;

export const LOCATION_OPTIONS = [
  { value: '1-5', label: '1–5 locations' },
  { value: '6-10', label: '6–10 locations' },
  { value: '11-20', label: '11–20 locations' },
  { value: '21-50', label: '21–50 locations' },
  { value: '50+', label: '50+ locations' },
];

export const INVESTMENT_OPTIONS = [
  { value: '', label: 'Select investment range (optional)' },
  { value: 'under-100k', label: 'Under £100k' },
  { value: '100k-500k', label: '£100k – £500k' },
  { value: '500k-1m', label: '£500k – £1m' },
  { value: '1m-plus', label: '£1m+' },
  { value: 'strategic', label: 'Strategic partnership' },
];
