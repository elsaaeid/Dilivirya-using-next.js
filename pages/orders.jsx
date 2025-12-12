

import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { OrdersContent } from '../components/OrdersContent';
import { CiCircleList } from "react-icons/ci";
import { PiFunnelSimple } from "react-icons/pi";



const ordersData = [
  { id: '341234', customer: 'name', city: 'Alexandria', province: 'Sidi Beshr', pickDate: 'Feb 24, 2022', pickTime: '10:00AM', delivery: 'Immediately', total: '2.230,25', status: 'Approved' },
  { id: '341234', customer: 'name', city: 'Alexandria', province: 'Sidi Beshr', pickDate: 'Feb 24, 2022', pickTime: '10:00AM', delivery: 'Immediately', total: '2.230,25', status: '' },
  { id: '341234', customer: 'name', city: 'Alexandria', province: 'Sidi Beshr', pickDate: 'Feb 24, 2022', pickTime: '10:00AM', delivery: 'Immediately', total: '2.230,25', status: 'Delivered' },
  { id: '341234', customer: 'name', city: 'Alexandria', province: 'Sidi Beshr', pickDate: 'Feb 24, 2022', pickTime: '10:00AM', delivery: 'Immediately', total: '2.230,25', status: 'pending' },
  { id: '341234', customer: 'name', city: 'Alexandria', province: 'Sidi Beshr', pickDate: 'Feb 24, 2022', pickTime: '10:00AM', delivery: 'Immediately', total: '2.230,25', status: 'Rejected' },
  { id: '341234', customer: 'safwaat', city: 'giza', province: 'str33', pickDate: 'Feb 24, 2022', pickTime: '10:00AM', delivery: 'Immediately', total: '2.230,25', status: 'Preparing' },
  { id: '341234', customer: 'said', city: 'Alexandria', province: 'Sidi Beshr', pickDate: 'Feb 24, 2022', pickTime: '10:00AM', delivery: 'Immediately', total: '2.230,25', status: 'Delivered' },
  { id: '341234', customer: 'mohamed', city: 'elmansoura', province: 'Sidi Beshr', pickDate: 'Feb 24, 2022', pickTime: '10:00AM', delivery: 'Immediately', total: '2.230,25', status: 'On the way' },
  { id: '341234', customer: 'ahmed', city: 'cairo', province: '23str', pickDate: 'Feb 24, 2022', pickTime: '10:00AM', delivery: 'Immediately', total: '2.230,25', status: 'Pending' },
];


export default function OrdersPage({ sidebarOpen, handleMenuToggle }) {
  const [filter, setFilter] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [filterStatus, setFilterStatus] = useState('');

  let filteredOrders = ordersData.filter(order =>
    (filterStatus === '' || (order.status && order.status.toLowerCase() === filterStatus.toLowerCase())) &&
    (
      order.customer.toLowerCase().includes(filter.toLowerCase()) ||
      order.city.toLowerCase().includes(filter.toLowerCase()) ||
      order.province.toLowerCase().includes(filter.toLowerCase()) ||
      order.id.includes(filter)
    )
  );

  return (
    <Layout sidebarOpen={sidebarOpen} handleMenuToggle={handleMenuToggle}>
      <div className="header-wrapper mb-2 flex flex-row justify-around items-center">
        <div className="page-title flex flex-row justify-around items-center">
          <h3>Orders</h3>
        </div>
        <div className="filterButtonsContent d-flex flex-row justify-content-between align-items-center">
          <div className="pendingButton flex flex-row justify-between items-baseline" style={{ padding: 0, background: 'none' }}>
            <select
              id="extra-select"
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value)}
              style={{ borderRadius: 33, padding: '10px 10px', color: 'var(--gold)', background: 'var(--gold-light)', fontWeight: 600 }}
            >
              <option value="Approved" className="approve" style={{ backgroundColor: 'green', color: 'white' }}>Approved</option>
              <option value="Rejected" className="reject" style={{ backgroundColor: 'red', color: 'white' }}>Rejected</option>
              <option value="Pending">Pending</option>
              <option value="Preparing">Preparing</option>
              <option value="On the way">On the way</option>
              <option value="Delivered">Delivered</option>
              <option value="">All</option>
            </select>
          </div>
          <div id="filterShow" className="filterButton flex flex-row justify-between items-baseline" onClick={() => setShowFilter(v => !v)}>
            <h4>Filter</h4>
            <span><PiFunnelSimple size={20} /></span>
          </div>
        </div>
      </div>
      <div className="content-wrapper flex flex-col align-baseline justify-center">
        {showFilter && (
          <div className="input-group" id="toggleFilter">
            <button className="btn btn-lavender" type="button" id="button-search"></button>
            <input
              type="text"
              className="form-control"
              id="filterInput"
              value={filter}
              onChange={e => setFilter(e.target.value)}
              placeholder="Search for product..."
            />
          </div>
        )}
        <div className="table-responsive">
          <table className="order-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Details</th>
                <th>City</th>
                <th>Province</th>
                <th>Odr Picg Dte</th>
                <th>Delivery Date</th>
                <th>Total</th>
                <th>Status</th>
                <th><span className="download"><i className="bi bi-box-arrow-in-down"></i></span></th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, idx) => (
                <tr key={idx}>
                  <td>
                    <span>
                      <i className="bx bxs-chevron-right"></i>
                      <Link href="/ordersitem" legacyBehavior>
                        <a style={{ borderBottom: '1px solid gray' }}>{order.id}</a>
                      </Link>
                    </span>
                  </td>
                  <td>{order.customer}</td>
                  <td>{order.city}</td>
                  <td>{order.province}</td>
                  <td>{order.pickDate}<span>{order.pickTime}</span></td>
                  <td className="Immediately">{order.delivery}</td>
                  <td>{order.total}</td>
                  <td><i className="bi bi-record-circle-fill"></i><span>{order.status}</span></td>
                  <td><i className="bi bi-three-dots-vertical"></i></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <OrdersContent />
    </Layout>
  );
}
