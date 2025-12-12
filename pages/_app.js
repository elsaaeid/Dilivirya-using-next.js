import ToastProvider from "../components/ToastContext";
import "../styles/globals.css";
import "../styles/pages-styles/orders-component.css";
import "../styles/sidebar.css";
import "../styles/navbar.css";
import "../styles/multiCardsOverview.css";
import "../styles/pages-styles/admins.css";
import { useState } from "react";


function MyApp({ Component, pageProps }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuToggle = () => setSidebarOpen((open) => !open);

  return (
    <ToastProvider>
      <Component sidebarOpen={sidebarOpen} handleMenuToggle={handleMenuToggle} {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;