export interface ILatestProject {
  name: string;
  slug: string;
  type: string;
  langLogo: {
    url: string;
    fileName: string;
  };
}

export interface ILatestProjects {
  localizations: ILatestProject[];
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
