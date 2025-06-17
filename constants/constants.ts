export const navLinks: { label: string; id: string }[] = [
  {
    label: 'Home',
    id: 'hero',
  },
  {
    label: 'About',
    id: 'about',
  },
  {
    label: 'Experience',
    id: 'experience',
  },
  {
    label: 'Skills',
    id: 'skills',
  },
  {
    label: 'Projects',
    id: 'projects',
  },
  {
    label: 'Contact',
    id: 'contact',
  },
];

export const LINKEDIN_URL = 'https://www.linkedin.com/in/lucas-cipriani/';
export const PERSONAL_EMAIL = 'lucas.ci25@hotmail.com';
export const PERSONAL_PHONE = '+55 (48) 99600-1678';
export const LOCATION = 'Nova Trento, Santa Catarina - Brazil';

export const API_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'http://localhost:3000/';
