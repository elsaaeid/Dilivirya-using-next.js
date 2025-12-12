import Layout from "../components/Layout";

export default function CustomerSupportPage({ sidebarOpen, handleMenuToggle }) {
  return (
    <Layout sidebarOpen={sidebarOpen} handleMenuToggle={handleMenuToggle}>
      <div style={{ padding: 20 }}>
        <h1>Customer Support</h1>
        <table className="admins-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Issue</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="#">1</td>
              <td data-label="Name">Ali Hassan</td>
              <td data-label="Email">ali@example.com</td>
              <td data-label="Issue">Order not received</td>
              <td data-label="Status" style={{ color: 'green' }}>Resolved</td>
              <td data-label="Actions">
                <button style={{ marginRight: 8, background: '#eabbff', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>View</button>
                <button style={{ background: '#FF0909', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>Delete</button>
              </td>
            </tr>
            <tr>
              <td data-label="#">2</td>
              <td data-label="Name">Sara Ahmed</td>
              <td data-label="Email">sara@example.com</td>
              <td data-label="Issue">Refund request</td>
              <td data-label="Status" style={{ color: 'red' }}>Pending</td>
              <td data-label="Actions">
                <button style={{ marginRight: 8, background: '#eabbff', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>View</button>
                <button style={{ background: '#FF0909', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
