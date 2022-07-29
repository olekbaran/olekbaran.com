import { gql } from 'graphql-request';

export const latestProjectsQuery = (locale: string, defaultLocale: string) => {
  const query = gql`
    {
      projects(orderBy: endDate_DESC, first: 3, locales: [${locale}, ${defaultLocale}]) {
        id
        name
        slug
        type
        langLogo {
          url
          fileName
        }
      }
    }
  `;
  return query;
};

export const projectsQuery = (locale: string, defaultLocale: string) => {
  const query = gql`
    {
      projects(orderBy: endDate_DESC, locales: [${locale}, ${defaultLocale}]) {
        id
        name
        slug
        type
        langLogo {
          url
          fileName
        }
      }
    }
  `;
  return query;
};

export const projectsSlugsQuery = gql`
  {
    projects {
      slug
    }
  }
`;

export const projectQuery = (
  slug: string | string[],
  locale: string,
  defaultLocale: string
) => {
  const query = gql`
    {
      project(where: {slug: "${slug}"}, locales: [${locale}, ${defaultLocale}]) {
        name
        slug
        startDate
        endDate
        type
        langLogo {
          url
          fileName
        }
        langUrl
        demo
        gitHub
        image {
          url
          fileName
        }
        description
        metaDescription
      }
    }
  `;
  return query;
};
