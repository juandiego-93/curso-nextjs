import '@styles/global.css';
import AppContext from '@context/AppContext';
import Header from '@components/Header';
import useInitialState from '@hooks/useInitialState';

export default function App({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
