import { AppProps } from 'next/app';

import '../styles/plugins.css';
import '../styles/bootstrap.min.css';
import '../styles/font-awesome.min.css';
import '../styles/ionicons.min.css';
import '../styles/fonts.css';
import '../styles/style.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
