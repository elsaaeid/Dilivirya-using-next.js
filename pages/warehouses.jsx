import Layout from "../components/Layout";

export default function WarehousesPage({ sidebarOpen, handleMenuToggle }) {
  return (
    <Layout sidebarOpen={sidebarOpen} handleMenuToggle={handleMenuToggle}>
      <div style={{ padding: 20 }}>
        <h1>Warehouses</h1>
        {/* TODO: Add warehouses details here */}
            <table className="admins-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Capacity</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="#">1</td>
                  <td data-label="Name">Main Warehouse</td>
                  <td data-label="Location">Cairo</td>
                  <td data-label="Capacity">5000 units</td>
                  <td data-label="Status" style={{ color: 'green' }}>Active</td>
                  <td data-label="Actions">
                    <button style={{ marginRight: 8, background: '#eabbff', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>Edit</button>
                    <button style={{ background: '#FF0909', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td data-label="#">2</td>
                  <td data-label="Name">Backup Storage</td>
                  <td data-label="Location">Alexandria</td>
                  <td data-label="Capacity">2000 units</td>
                  <td data-label="Status" style={{ color: 'red' }}>Inactive</td>
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
