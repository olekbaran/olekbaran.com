import { GitHub, Instagram, LinkedIn, Email } from 'assets/icons';

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
