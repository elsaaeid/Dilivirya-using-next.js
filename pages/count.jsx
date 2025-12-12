import Layout from "../components/Layout";

export default function InventoryCountPage({ sidebarOpen, handleMenuToggle }) {
  return (
    <Layout sidebarOpen={sidebarOpen} handleMenuToggle={handleMenuToggle}>
      <div style={{ padding: 20 }}>
        <h1>Inventory Count</h1>
        <table className="admins-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Warehouse</th>
              <th>Unit</th>
              <th>Counted</th>
              <th>Expected</th>
              <th>Difference</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="#">1</td>
              <td data-label="Product">Apple</td>
              <td data-label="Warehouse">Main Warehouse</td>
              <td data-label="Unit">KG</td>
              <td data-label="Counted">120</td>
              <td data-label="Expected">125</td>
              <td data-label="Difference" style={{ color: 'red' }}>-5</td>
              <td data-label="Actions">
                <button style={{ marginRight: 8, background: '#eabbff', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>Edit</button>
                <button style={{ background: '#FF0909', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>Delete</button>
              </td>
            </tr>
            <tr>
              <td data-label="#">2</td>
              <td data-label="Product">Milk</td>
              <td data-label="Warehouse">Backup Storage</td>
              <td data-label="Unit">Litre</td>
              <td data-label="Counted">80</td>
              <td data-label="Expected">80</td>
              <td data-label="Difference" style={{ color: 'green' }}>0</td>
              <td data-label="Actions">
                <button style={{ marginRight: 8, background: '#eabbff', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>Edit</button>
                <button style={{ background: '#FF0909', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
