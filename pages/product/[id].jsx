import Layout from "../../components/Layout";

export default function ProductDetailPage({ sidebarOpen, handleMenuToggle }) {
  return (
    <Layout sidebarOpen={sidebarOpen} handleMenuToggle={handleMenuToggle}>
      {/* Product detail content goes here */}
      <div style={{ padding: 20 }}>
        <h1>Product Detail</h1>
        {/* TODO: Add product details here */}
      </div>
    </Layout>
  );
}
