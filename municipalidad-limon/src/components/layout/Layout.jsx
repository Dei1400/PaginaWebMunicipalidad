import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import AccessibilityWidget from './AccessibilityWidget';

function Layout({ children }) {
  return (
    <>

      <Header />

      <Navbar />

      <main>
        {children}
      </main>

      <Footer />

      <AccessibilityWidget />
    </>
  );
}

export default Layout;
