import Layout from '../components/layout';
import ShopItems from '../components/ShopItems';

import Featured from '../components/Featured';
import PageBanner from '../components/PageBanner';
import Cart from '../components/Cart';

export default function CartPage() {
  return (
    <>
      <Layout>
        <PageBanner title="Cart" />
        <Cart />
      </Layout>
    </>
  );
}
