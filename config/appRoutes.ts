import { en, pl } from 'locales';
import type { IAppRoutes } from 'types';

export const appRoutes: IAppRoutes = {
  home: {
    name: {
      en: en.nav.home,
      pl: pl.nav.home,
    },
    slug: '/',
  },
  aboutMe: {
    name: {
      en: en.nav.aboutMe,
      pl: pl.nav.aboutMe,
    },
    slug: '/about-me',
  },
  projects: {
    name: {
      en: en.nav.projects,
      pl: pl.nav.projects,
    },
    slug: '/projects',
  },
  uses: {
    name: {
      en: en.nav.uses,
      pl: pl.nav.uses,
    },
    slug: '/uses',
  },
  contact: {
    name: {
      en: en.nav.contact,
      pl: pl.nav.contact,
    },
    slug: '/#contact',
  },
};
