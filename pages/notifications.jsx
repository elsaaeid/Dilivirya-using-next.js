import Layout from "../components/Layout";

export default function NotificationsPage({ sidebarOpen, handleMenuToggle }) {
  return (
    <Layout sidebarOpen={sidebarOpen} handleMenuToggle={handleMenuToggle}>
      <div style={{ padding: 20 }}>
        <h1>Push Notifications</h1>
        <table className="admins-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Message</th>
              <th>Audience</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="#">1</td>
              <td data-label="Title">Promo Alert</td>
              <td data-label="Message">Get 20% off this week only!</td>
              <td data-label="Audience">All Users</td>
              <td data-label="Date">2025-12-10</td>
              <td data-label="Status" style={{ color: 'green' }}>Sent</td>
              <td data-label="Actions">
                <button style={{ marginRight: 8, background: '#eabbff', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>Edit</button>
                <button style={{ background: '#FF0909', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>Delete</button>
              </td>
            </tr>
            <tr>
              <td data-label="#">2</td>
              <td data-label="Title">System Update</td>
              <td data-label="Message">Scheduled maintenance at midnight.</td>
              <td data-label="Audience">Admins</td>
              <td data-label="Date">2025-12-11</td>
              <td data-label="Status" style={{ color: 'red' }}>Failed</td>
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
