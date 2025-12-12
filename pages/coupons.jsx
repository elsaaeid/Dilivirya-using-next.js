import Layout from "../components/Layout";

export default function CouponsPage({ sidebarOpen, handleMenuToggle }) {
  return (
    <Layout sidebarOpen={sidebarOpen} handleMenuToggle={handleMenuToggle}>
      <div style={{ padding: 20 }}>
        <h1>Coupons</h1>
        <table className="admins-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Code</th>
              <th>Discount</th>
              <th>Type</th>
              <th>Usage Limit</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="#">1</td>
              <td data-label="Code">WELCOME10</td>
              <td data-label="Discount">10%</td>
              <td data-label="Type">Percentage</td>
              <td data-label="Usage Limit">100</td>
              <td data-label="Status" style={{ color: 'green' }}>Active</td>
              <td data-label="Actions">
                <button style={{ marginRight: 8, background: '#eabbff', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>Edit</button>
                <button style={{ background: '#FF0909', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>Delete</button>
              </td>
            </tr>
            <tr>
              <td data-label="#">2</td>
              <td data-label="Code">FREESHIP</td>
              <td data-label="Discount">Free Shipping</td>
              <td data-label="Type">Shipping</td>
              <td data-label="Usage Limit">50</td>
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
