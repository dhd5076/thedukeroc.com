import Header from './header.js';
import Footer from './footer.js';

function Layout({ children }) {
  return (
    <div className="flex flex-col h-full">
      <Header />
        <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;