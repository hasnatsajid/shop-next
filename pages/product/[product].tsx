import { useRouter } from 'next/router';
import Details from '../../components/Details';
import Layout from '../../components/layout';
import PageBanner from '../../components/PageBanner';

import { products } from '../../utils/products';

interface Item {
  id: Number;
  name: String;
  image: String;
  price: Number;
}

const product = () => {
  const { query } = useRouter();
  const productId = +query.product;

  const productDetails = products.find((item) => item.id === productId);

  return (
    <Layout>
      <PageBanner title="Product details" />
      <Details productDetails={productDetails} />
    </Layout>
  );
};

export default product;
