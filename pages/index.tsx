import Banner from '../components/Banner';
import Layout from '../components/layout';
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
