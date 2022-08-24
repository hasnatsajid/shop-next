import Details from '../components/Details';
import Layout from '../components/layout';
import PageBanner from '../components/PageBanner';

const product = () => {
  return (
    <Layout>
      <PageBanner title="Product details" />
      <Details />
    </Layout>
  );
};

export default product;
