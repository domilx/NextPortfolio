import "../styles/globals.css";
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    hotjar.initialize(3193349, 6)
  }, [])
  return <Component {...pageProps} />;
};

export default App;
