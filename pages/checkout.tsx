import Layout from '../components/layout';

import PageBanner from '../components/PageBanner';
import Checkout from '../components/Checkout';

export default function CheckoutPage() {
  return (
    <>
      <Layout>
        <PageBanner title="Checkout" />
        <Checkout />
      </Layout>
    </>
  );
}
