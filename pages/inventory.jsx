import Layout from "../components/Layout";

export default function InventoryPage({ sidebarOpen, handleMenuToggle }) {
  return (
    <Layout sidebarOpen={sidebarOpen} handleMenuToggle={handleMenuToggle}>
      {/* Inventory content goes here */}
      <div style={{ padding: 20 }}>
        <h1>Inventory</h1>
        {/* TODO: Add inventory details here */}
      </div>
    </Layout>
  );
}
