import React from 'react';

import { Header, Footer } from 'components';

interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FunctionComponent<ILayout> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
