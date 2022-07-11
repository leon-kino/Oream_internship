import type { AppProps } from 'next/app';
import '@/style/globals.css';
import { PageFooter } from '@/component/PageFooter';
import { PageHeader } from '@/component/PageHeader';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <PageHeader />
    <Component {...pageProps} />
    <PageFooter />
  </>
);

export default App;
