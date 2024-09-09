import '../styles/globals.css'; // Import global styles, TailwindCSS
import Layout from '../components/layout.js';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

// origininal website code