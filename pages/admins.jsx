import Layout from "../components/Layout";

export default function AdminsPage({ sidebarOpen, handleMenuToggle }) {
  return (
    <Layout sidebarOpen={sidebarOpen} handleMenuToggle={handleMenuToggle}>
      <div style={{ padding: 20 }}>
        <h1>Admins</h1>
        <table className="admins-table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: 24, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <thead>
            <tr style={{ background: '#F4F6F8' }}>
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>#</th>
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>Email</th>
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>Role</th>
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>Status</th>
              <th style={{ padding: '12px 8px', textAlign: 'left' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px 8px' }}>1</td>
              <td style={{ padding: '10px 8px' }}>John Doe</td>
              <td style={{ padding: '10px 8px' }}>john@example.com</td>
              <td style={{ padding: '10px 8px' }}>Super Admin</td>
              <td style={{ padding: '10px 8px', color: 'green' }}>Active</td>
              <td style={{ padding: '10px 8px' }}>
                <button style={{ marginRight: 8, background: '#eabbff', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>Edit</button>
                <button style={{ background: '#FF0909', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>Delete</button>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '10px 8px' }}>2</td>
              <td style={{ padding: '10px 8px' }}>Jane Smith</td>
              <td style={{ padding: '10px 8px' }}>jane@example.com</td>
              <td style={{ padding: '10px 8px' }}>Admin</td>
              <td style={{ padding: '10px 8px', color: 'red' }}>Inactive</td>
              <td style={{ padding: '10px 8px' }}>
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
