import React from 'react';

import { Header } from 'components';

interface Ilayout {
  children: React.ReactNode;
}

export const Layout: React.FunctionComponent<Ilayout> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
