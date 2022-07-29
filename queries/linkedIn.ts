import { gql } from 'graphql-request';

export const linkedInProfileQuery = (locale: string, defaultLocale: string) => {
  const query = gql`
    {
      dev(where: { id: "cl1na8orstxm50bt76eqatskf" }, locales: [${locale}, ${defaultLocale}]) {
        name
        workplace
        companyLogo {
          url
          fileName
        }
        companyUrl
      }
    }
  `;
  return query;
};
