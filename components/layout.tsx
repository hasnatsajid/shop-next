import Footer from './footer';
import Header from './header';
import Meta from './meta';

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
