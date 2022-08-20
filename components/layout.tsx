import Footer from './footer';
import FooterMobile from './FooterMobile';
import Header from './header';
import Meta from './meta';
import MobileMenu from './MobileMenu';
import Sidebar from './Sidebar';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Sidebar />
      <Header />
      {children}
      <Footer />
      <FooterMobile />
      <MobileMenu />
    </>
  );
};

export default Layout;
