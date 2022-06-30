interface IProject {
  name: string;
  slug: string;
  type: string;
  langLogo: {
    url: string;
    fileName: string;
  };
}

export interface ILatestProjects {
  localizations: IProject[];
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
