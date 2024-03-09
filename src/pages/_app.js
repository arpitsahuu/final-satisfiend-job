import '@/styles/globals.css'
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Loading from './Loading'; // Import your Loading component
import { Router } from 'next/router';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../fontawesome'
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', () => setLoading(true));
  Router.events.on('routeChangeComplete', () => setLoading(false));
  Router.events.on('routeChangeError', () => setLoading(false));

  return (
    false ? <Loading /> :
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}
