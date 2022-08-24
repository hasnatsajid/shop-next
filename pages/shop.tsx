import Layout from '../components/layout';
import ShopItems from '../components/ShopItems';

import Featured from '../components/Featured';
import PageBanner from '../components/PageBanner';

export default function Shop() {
  return (
    <>
      <Layout>
        <PageBanner title="shop page" />
        <ShopItems />
      </Layout>
    </>
  );
}
