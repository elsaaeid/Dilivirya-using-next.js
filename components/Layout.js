
import React from 'react';
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";



const Layout = ({children, sidebarOpen, handleMenuToggle}) => {
  return (
    <div className="page-wrapper">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} handleMenuToggle={handleMenuToggle} />
      {/* Page content */}
      <div id="page-content" className="page-content">
        {/* NavBar */}
        <Navbar onMenuToggle={handleMenuToggle} />
        {/* Main Content */}
        <div className="content" id="content">
          {/* Children components will be rendered here */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout