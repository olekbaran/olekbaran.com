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
