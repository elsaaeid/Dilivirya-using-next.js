import Layout from "../components/Layout";


export default function GeneralSettingsPage({ sidebarOpen, handleMenuToggle }) {
  return (
    <Layout sidebarOpen={sidebarOpen} handleMenuToggle={handleMenuToggle}>
      <div style={{ padding: 20, maxWidth: 600, margin: '0 auto' }}>
        <h1>General Settings</h1>
        <form className="admins-table" style={{ background: '#fff', borderRadius: 8, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 600 }}>Site Name</label>
            <input type="text" className="form-control" defaultValue="Dilivirya" style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #e6e6e6', marginTop: 4 }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 600 }}>Support Email</label>
            <input type="email" className="form-control" defaultValue="support@dilivirya.com" style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #e6e6e6', marginTop: 4 }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 600 }}>Default Language</label>
            <select className="form-control" style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #e6e6e6', marginTop: 4 }}>
              <option>English</option>
              <option>Arabic</option>
            </select>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 600 }}>Timezone</label>
            <select className="form-control" style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #e6e6e6', marginTop: 4 }}>
              <option>Africa/Cairo</option>
              <option>UTC</option>
              <option>Europe/London</option>
            </select>
          </div>
          <button className="button" type="submit">Save Settings</button>
        </form>
      </div>
    </Layout>
  );
}