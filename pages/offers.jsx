import Layout from "../components/Layout";

export default function OffersPage({ sidebarOpen, handleMenuToggle }) {
  return (
    <Layout sidebarOpen={sidebarOpen} handleMenuToggle={handleMenuToggle}>
      <div style={{ padding: 20 }}>
        <h1>Offers</h1>
        <table className="admins-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Discount</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="#">1</td>
              <td data-label="Title">Winter Sale</td>
              <td data-label="Description">Up to 30% off on all products</td>
              <td data-label="Discount">30%</td>
              <td data-label="Start Date">2025-12-01</td>
              <td data-label="End Date">2025-12-31</td>
              <td data-label="Status" style={{ color: 'green' }}>Active</td>
              <td data-label="Actions">
                <button style={{ marginRight: 8, background: '#eabbff', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>Edit</button>
                <button style={{ background: '#FF0909', border: 'none', borderRadius: 4, padding: '6px 12px', color: '#fff', cursor: 'pointer' }}>Delete</button>
              </td>
            </tr>
            <tr>
              <td data-label="#">2</td>
              <td data-label="Title">Free Delivery</td>
              <td data-label="Description">Free shipping on orders over $50</td>
              <td data-label="Discount">Free Shipping</td>
              <td data-label="Start Date">2025-12-10</td>
              <td data-label="End Date">2025-12-20</td>
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
