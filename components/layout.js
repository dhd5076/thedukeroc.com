import Header from './header.js';
import Footer from './footer.js';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;