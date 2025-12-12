
import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Sidebar = ({ open }: { open: boolean }) => {

  const [openDropdown, setOpenDropdown] = useState(null);
  const router = useRouter();
  const handleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  const isActive = (href: string) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };
  return (
    <div id="sidebar" className={`sidebar${open ? ' open' : ''}`}>
      <div className="logo-wrapper text-center">
        <img src="/assets/images/logo.png" alt="logo" />
        <h4 className="text-light">Dilivirya</h4>
      </div>
      <ul className="side-list list-unstyled text-light">
        <li>
          <Link href="/" legacyBehavior>
            <a id="dashboard" className={`main-link${isActive('/') ? ' active' : ''}`}>
              <span className="icon icon-dashboard"></span>
              <span className="text">dashboard</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/orders" legacyBehavior>
            <a className={`main-link${isActive('/orders') ? ' active' : ''}`}>
              <span className="icon icon-orders"></span>
              <span className="text">orders</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admins" legacyBehavior>
            <a id="admins" className={`main-link${isActive('/admins') ? ' active' : ''}`}>
              <span className="icon icon-admins"></span>
              <span className="text">admins</span>
            </a>
          </Link>
        </li>
        <li className="dropdown">
          <a
            className={`main-link collapsed${
              isActive('/classifications') ||
              isActive('/measurement') ||
              isActive('/warehouses') ||
              isActive('/products') ||
              isActive('/count')
                ? ' active' : ''
            }`}
            href="#"
            role="button"
            onClick={e => { e.preventDefault(); handleDropdown('inventory'); }}
          >
            <span className="icon icon-inventory"></span>
            <span className="text">inventory</span>
          </a>
          <ul className={`multi-collapse ${openDropdown === 'inventory' ? '' : 'collapse'}`} id="inventory">
            <li><Link href="/classifications" legacyBehavior><a id="classifications" className={`main-link${isActive('/classifications') ? ' active' : ''}`} onClick={() => { if(openDropdown !== 'inventory') setOpenDropdown('inventory'); }}>Classifications</a></Link></li>
            <li><Link href="/measurement" legacyBehavior><a id="measurement" className={`main-link${isActive('/measurement') ? ' active' : ''}`} onClick={() => { if(openDropdown !== 'inventory') setOpenDropdown('inventory'); }}>Unit of Measurement</a></Link></li>
            <li><Link href="/warehouses" legacyBehavior><a id="warehouses" className={`main-link${isActive('/warehouses') ? ' active' : ''}`} onClick={() => { if(openDropdown !== 'inventory') setOpenDropdown('inventory'); }}>Warehouses</a></Link></li>
            <li><Link href="/products" legacyBehavior><a id="products" className={`main-link${isActive('/products') ? ' active' : ''}`} onClick={() => { if(openDropdown !== 'inventory') setOpenDropdown('inventory'); }}>Products</a></Link></li>
            <li><Link href="/count" legacyBehavior><a id="count" className={`main-link${isActive('/count') ? ' active' : ''}`} onClick={() => { if(openDropdown !== 'inventory') setOpenDropdown('inventory'); }}>Inventory count</a></Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <a
            className={`main-link collapsed${
              isActive('/coupons') || isActive('/offers') || isActive('/notifications') ? ' active' : ''
            }`}
            href="#"
            role="button"
            onClick={e => { e.preventDefault(); handleDropdown('Marketing'); }}
          >
            <span className="icon icon-Marketing"></span>
            <span className="text">Marketing</span>
          </a>
          <ul className={`multi-collapse ${openDropdown === 'Marketing' ? '' : 'collapse'}`} id="Marketing">
            <li><Link href="/coupons" legacyBehavior><a id="coupons" className={`main-link${isActive('/coupons') ? ' active' : ''}`} onClick={() => { if(openDropdown !== 'Marketing') setOpenDropdown('Marketing'); }}>Coupons</a></Link></li>
            <li><Link href="/offers" legacyBehavior><a id="offers" className={`main-link${isActive('/offers') ? ' active' : ''}`} onClick={() => { if(openDropdown !== 'Marketing') setOpenDropdown('Marketing'); }}>Offers</a></Link></li>
            <li><Link href="/notifications" legacyBehavior><a id="notifications" className={`main-link${isActive('/notifications') ? ' active' : ''}`} onClick={() => { if(openDropdown !== 'Marketing') setOpenDropdown('Marketing'); }}>Push Notifications</a></Link></li>
          </ul>
        </li>
        <li>
          <Link href="/clients" legacyBehavior>
            <a id="clients" className={`main-link${isActive('/clients') ? ' active' : ''}`}>
              <span className="icon icon-Clients"></span>
              <span className="text">Clients</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/stories" legacyBehavior>
            <a id="stories" className={`main-link${isActive('/stories') ? ' active' : ''}`}>
              <span className="icon icon-stories"></span>
              <span className="text">stories</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/profile" legacyBehavior>
            <a id="profile" className={`main-link${isActive('/profile') ? ' active' : ''}`}>
              <span className="icon icon-profile"></span>
              <span className="text">my profile</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/customers" legacyBehavior>
            <a id="customers" className={`main-link${isActive('/customers') ? ' active' : ''}`}>
              <span className="icon icon-customer"></span>
              <span className="text">customer support</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/settings" legacyBehavior>
            <a id="settings" className={`main-link${isActive('/settings') ? ' active' : ''}`}>
              <span className="icon icon-settings"></span>
              <span className="text">general settings</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
