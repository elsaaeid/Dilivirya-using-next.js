import Layout from "../components/Layout";

export default function MarketingPage({ sidebarOpen, handleMenuToggle }) {
  return (
    <Layout sidebarOpen={sidebarOpen} handleMenuToggle={handleMenuToggle}>
      {/* Marketing content goes here */}
      <div style={{ padding: 20 }}>
        <h1>Marketing</h1>
        {/* TODO: Add marketing details here */}
      </div>
    </Layout>
  );
}
