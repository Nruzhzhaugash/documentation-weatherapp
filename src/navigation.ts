import { 
  createLocalizedPathnamesNavigation,
  Pathnames
} from "next-intl/navigation"; 

export const locales = ['en', 'ru'] as const;
export const localePrefix = 'always';

export const pathnames = {
  '/': '/',
  '/start': '/start',

  '/intro': {
    ru: '/intro',
    en: '/intro'
  },
  '/on': {
    ru: '/on',
    en: '/on'
  },
  "/api": {
    ru: "/api",
    en: "/api"
  }
} satisfies Pathnames<typeof locales>

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });