import { GitHub, Instagram, LinkedIn, Email } from 'assets/icons/contact';
import { JavaScript, TypeScript, React, Next } from 'assets/icons/technologies';

const emailUrl = `mailto:${process.env.NEXT_PUBLIC_EMAIL}`;

export const socialMedia = {
  gitHub: {
    url: process.env.NEXT_PUBLIC_GITHUB_URL,
    icon: <GitHub />,
  },
  instagram: {
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    icon: <Instagram />,
  },
  linkedIn: {
    url: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    icon: <LinkedIn />,
  },
  email: {
    url: emailUrl,
    icon: <Email />,
  },
};

export const technologies = {
  js: {
    name: 'JavaScript',
    icon: <JavaScript />,
    url: 'https://www.javascript.com/',
  },
  ts: {
    name: 'TypeScript',
    icon: <TypeScript />,
    url: 'https://www.typescriptlang.org/',
  },
  react: {
    name: 'React',
    icon: <React />,
    url: 'https://reactjs.org/',
  },
  next: {
    name: 'Next',
    icon: <Next />,
    url: 'https://nextjs.org/',
  },
};
