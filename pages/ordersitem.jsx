import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';

const initialOrderItems = [
  { img: '/assets/images/stories/s-01.png', description: 'Fruits salad salad', unitPrice: '4,500', qty: '2 KG', totalQty: '2 KG', total: '100,000.22' },
  { img: '/assets/images/stories/s-01.png', description: 'Fruits salad salad', unitPrice: '4,500', qty: '2 KG', totalQty: '2 KG', total: '100,000.22' },
  { img: '/assets/images/stories/s-01.png', description: 'Fruits salad salad', unitPrice: '4,500', qty: '2 KG', totalQty: '2 KG', total: '100,000.22' },
  { img: '/assets/images/stories/s-01.png', description: 'Fruits salad salad', unitPrice: '4,500', qty: '2 KG', totalQty: '2 KG', total: '100,000.22' },
  { img: '/assets/images/stories/s-01.png', description: 'Fruits salad salad', unitPrice: '4,500', qty: '2 KG', totalQty: '2 KG', total: '100,000.22' },
  { img: '/assets/images/stories/s-01.png', description: 'Fruits salad salad', unitPrice: '4,500', qty: '2 KG', totalQty: '2 KG', total: '100,000.22' },
  { img: '/assets/images/stories/s-01.png', description: 'Fruits salad salad', unitPrice: '4,500', qty: '2 KG', totalQty: '2 KG', total: '100,000.22' },
  { img: '/assets/images/stories/s-01.png', description: 'Fruits salad salad', unitPrice: '4,500', qty: '2 KG', totalQty: '2 KG', total: '100,000.22' },
  { img: '/assets/images/stories/s-01.png', description: 'Fruits salad salad', unitPrice: '4,500', qty: '2 KG', totalQty: '2 KG', total: '100,000.22' },
];

export default function OrdersItemPage({ sidebarOpen, handleMenuToggle }) {
  const [orderItems, setOrderItems] = useState(initialOrderItems);

  // Example update function: could be extended to call an API or update state based on form inputs
  function orderUpdate() {
    // For demonstration, let's just update the first item's qty and total
    setOrderItems(prev => prev.map((item, idx) => idx === 0 ? { ...item, qty: '3 KG', total: '150,000.33' } : item));
    alert('Order updated!');
  }

  return (
    <Layout sidebarOpen={sidebarOpen} handleMenuToggle={handleMenuToggle}>
      <div className="content-wrapperOrder">
        <div className="header-wrapper mb-2">
          <div className="d-flex flex-row justify-content-around align-items-center">
            <div className="order-title cursor-pointer">
              <h3>Orders Details</h3>
            </div>
            <div className="orderUpdate">
              <button onClick={orderUpdate}>Update</button>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="order-table">
            <thead>
              <tr>
                <th>img</th>
                <th>Item Description</th>
                <th>Unit Price</th>
                <th>Qty</th>
                <th>Total Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item, idx) => (
                <tr key={idx}>
                  <td><Image src={item.img} alt="product" width={40} height={40} /></td>
                  <td>{item.description}</td>
                  <td className="d-flex flex-column">{item.unitPrice}</td>
                  <td>{item.qty}</td>
                  <td>{item.totalQty}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="order-container-top flex-column align-items-center" id="orderContainer">
          <div className="cancel-order mt-3 d-flex flex-row justify-content-around align-items-center">
            <span className="cursor-pointer">cancel</span>
            <i className="bi bi-x-circle cursor-pointer"></i>
          </div>
          <div className="client-content position-relative d-flex flex-row justify-content-center align-items-center">
            <div className="clientInfo position-absolute top-0 right-0 " id="client-info">
              <form className="well form-horizontal">
                <fieldset>
                  <legend className="my-3 d-flex flex-row justify-content-around align-items-center">
                    <h6>Client info</h6>
                    <div className="info-icons">
                      <span className="mapIcon sameProps"><i className="bi bi-geo-alt-fill"></i></span>
                      <span className="userIcon sameProps"><i className="bi bi-person-fill"></i></span>
                    </div>
                  </legend>
                  <div className="clientBody d-flex flex-column justify-content-center align-items-center">
                    <div className="form-group">
                      <div className="inputGroupContainer">
                        <div className="input-group inputProps">
                          <input name="full_name" placeholder="Client full name" className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-4 inputGroupContainer">
                        <div className="input-group inputProps">
                          <input name="phone" placeholder="Number" className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="inputGroupContainer d-flex flex-column">
                        <div className="input-group TimeinputProps">
                          <input type="date" name="date" placeholder="Order Date" defaultValue="2022-03-21" min="2017-01-01" max="2019-01-01" />
                        </div>
                        <div className="input-group TimeinputProps">
                          <input type="time" name="time" defaultValue="10:30" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-4 inputGroupContainer">
                        <div className="input-group inputProps">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                          <input name="city" placeholder="City" className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-4 inputGroupContainer">
                        <div className="input-group inputProps">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
                          <input name="Province" placeholder="Province" className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-4 inputGroupContainer d-flex flex-column">
                        <div className="input-group inputProps">
                          <input name="address" placeholder="Detailed Address" className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-4 inputGroupContainer">
                        <div className="input-group inputProps">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                          <textarea className="form-control inputProps" name="comment" placeholder="More Details"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="clientOrderInfo position-absolute top-0 left-0 " id="client-order">
              <legend className="my-3 d-flex flex-row justify-content-around align-items-center">
                <h6>Order info</h6>
                <span className="downloadIcon sameProps"><i className="bi bi-box-arrow-in-down"></i></span>
              </legend>
              <div className="orderTotal d-flex flex-row justify-content-evenly align-items-center"><h6>Total</h6><span>100,00.22</span></div>
              <div className="order-status mt-3 d-flex flex-col justify-content-center align-items-center">
                <div className="calender-status">
                  <select id="extra-select">
                    <option value="0" className="aprrove" style={{ backgroundColor: 'green', color: 'white' }}>Approve</option>
                    <option value="1" className="reject" style={{ backgroundColor: 'red', color: 'white' }}>Reject order</option>
                    <option value="2">Pending</option>
                    <option value="3">preparing</option>
                    <option value="4">On the way</option>
                    <option value="5">Delivered</option>
                  </select>
                </div>
                <div className="calender-status mt-5">
                  <select id="extra-select">
                    <option value="0">This week</option>
                    <option value="1">Today</option>
                    <option value="2">This week</option>
                    <option value="3">This month</option>
                    <option value="4">This year</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
