import type { AppProps } from 'next/app';
import { MotionConfig } from 'framer-motion';

import { Layout } from 'layouts';

import 'styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <MotionConfig reducedMotion="user">
      <Component {...pageProps} />
    </MotionConfig>
  </Layout>
);

export default MyApp;
