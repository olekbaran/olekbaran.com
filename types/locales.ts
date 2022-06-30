export interface IDictionary {
  seo: {
    home: {
      title: string;
      description: string;
      hero: {
        photo: string;
      };
    };
    components: {
      images: {
        avatar: string;
      };
    };
  };
  nav: {
    home: string;
    aboutMe: string;
    projects: string;
    uses: string;
    contact: string;
    blog: string;
  };
  home: {
    hero: {
      heading: string;
      scroll: string;
    };
    latestProjects: {
      heading: string;
      seeMore: string;
    };
    contact: {
      heading: string;
      linkedIn: {
        heading: string;
        footer: string;
      };
      email: {
        heading: string;
        copy: string;
        copied: string;
        footer: string;
      };
    };
  };
  contactForm: {
    heading: string;
    placeholders: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
    send: string;
  };
}
