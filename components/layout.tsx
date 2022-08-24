import Footer from './footer';
import FooterMobile from './FooterMobile';
import Header from './header';
import Meta from './meta';
import MobileMenu from './MobileMenu';
import Sidebar from './Featured';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div id="main-wrapper" className="section">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
