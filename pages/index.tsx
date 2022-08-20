import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Header from '../components/header';
import Layout from '../components/layout';
import ProductTab from '../components/ProductTab';
import Showcase from '../components/showcase';

export default function Index() {
  return (
    <>
      <Layout>
        <div className="page-contain">
          <div id="main-content" className="main-content">
            <Showcase />
            <Banner />
            <ProductTab />
          </div>
        </div>
      </Layout>
    </>
  );
}
