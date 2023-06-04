import '../styles/globals.css';
import { DarkModeProvider } from '../pages/DarkModeContext';
function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;