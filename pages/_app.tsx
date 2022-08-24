import { AppProps } from 'next/app';

import '../styles/plugins.css';
import '../styles/bootstrap.min.css';
import '../styles/font-awesome.min.css';
import '../styles/ionicons.min.css';
import '../styles/fonts.css';
import '../styles/style.css';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
