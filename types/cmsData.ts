export interface IProjectCard {
  id: string;
  name: string;
  slug: string;
  type: string;
  langLogo: {
    url: string;
    fileName: string;
  };
}

export interface IProjects {
  localizations: IProjectCard[];
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

interface ISingleProject {
  name: string;
  slug: string;
  startDate: Date;
  endDate: Date;
  type: string;
  langLogo: {
    url: string;
    fileName: string;
  };
  langUrl: string;
  demo: string;
  gitHub: string;
  image: {
    url: string;
    fileName: string;
  };
  description: string;
  metaDescription: string;
}

export interface ISingleProjects {
  localizations: ISingleProject[];
}
