export interface ISingleLatestProjectCard {
  id: string;
  name: string;
  slug: string;
  type: string;
  langLogo: {
    url: string;
    fileName: string;
  };
}

export interface ILatestProjects {
  localizations: ISingleLatestProjectCard[];
}

export interface ILinkedInProfile {
  name: string;
  workplace: string;
  companyLogo: {
    url: string;
    fileName: string;
  };
  companyUrl: string;
}

export interface ISingleProjectCard {
  id: string;
  name: string;
  slug: string;
  type: string;
  langLogo: {
    url: string;
    fileName: string;
  };
  langUrl: string;
  demo: string | null;
  gitHub: string;
}

export interface IProjects {
  localizations: ISingleProjectCard[];
}
