import '../styles/globals.css';
import '../styles/custom.module.css'
import '../styles/tailwind.css'; 

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
