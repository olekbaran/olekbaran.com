import type { IDictionary } from 'types';

export const en: IDictionary = {
  seo: {
    home: {
      title: 'Olek Baran',
      description:
        "I'm a front-end web developer using React and Next.js. I love experimenting with Jamstack technologies and interesting libraries. Visit this website to see some info about me and check the projects I created.",
      hero: {
        photo: 'Olek Baran - Front-end web developer',
      },
    },
    components: {
      images: {
        avatar: 'Olek Baran - Front-end web developer',
      },
    },
  },
  nav: {
    home: 'Home',
    aboutMe: 'About me',
    projects: 'Projects',
    uses: 'Uses',
    contact: 'Contact',
    blog: 'Blog',
  },
  home: {
    hero: {
      heading: 'Front-end\n web developer',
      scroll: "Check out what's below!",
    },
    latestProjects: {
      heading: 'Latest projects',
    },
    contact: {
      heading: 'Contact',
      linkedIn: {
        heading: 'LinkedIn',
        footer: 'Go to my LinkedIn profile →',
      },
      email: {
        heading: 'Email',
        copy: 'Copy to the clipboard',
        copied: 'Copied',
        footer: 'Open your email client →',
      },
    },
  },
  contactForm: {
    heading: 'Send a message',
    placeholders: {
      name: 'Full name *',
      email: 'Email *',
      subject: 'Subject *',
      message: 'Message *',
    },
    send: 'Send',
  },
};
