import { AppProps } from 'next/app';
import '../styles/main-color.css';
// import '../styles/main-color01.css';
// import '../styles/main-color02.css';
// import '../styles/main-color03-green.css';
// import '../styles/main-color04.css';
import '../styles/style.css';
import '../styles/nice-select.css';
import '../styles/bootstrap.min.css';
import '../styles/font-awesome.min.css';
import '../styles/slick.min.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
