import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Header from '../components/header';
import Layout from '../components/layout';
import ProductTab from '../components/ProductTab';
import Showcase from '../components/Hero';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Newsletter from '../components/Newsletter';
import BlogSection from '../components/BlogSection';

export default function Index() {
  return (
    <>
      <Layout>
        <Hero />
        <Banner />
        <Featured />
        <Newsletter />
        <BlogSection />
      </Layout>
    </>
  );
}
