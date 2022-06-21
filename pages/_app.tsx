import type { AppProps } from 'next/app';

import { Layout } from 'layouts';

import 'styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
