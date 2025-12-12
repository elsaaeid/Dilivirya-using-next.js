import Head from "next/head";
import Layout from "../components/Layout";
import { Home } from "./Home";


export default function HomePage({ sidebarOpen, handleMenuToggle }) {
  
  return (
    <div className="home-container">
      <Head>
        <title>Dilivirya</title>
        <meta name="description" content="Dilivirya - Your trusted online store for quality products" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Layout sidebarOpen={sidebarOpen} handleMenuToggle={handleMenuToggle}>
        <Home />
      </Layout>
    </div>
  );
}
