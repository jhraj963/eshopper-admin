import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Invoice/Invoice.css';

function Invoice() {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        async function fetchOrder() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/allorder/${orderId}`);
                setOrder(response.data.data);
            } catch (error) {
                console.error("Error fetching order data:", error);
            }
        }
        fetchOrder();
    }, [orderId]);

    if (!order) {
        return <p>Loading invoice...</p>;
    }

    return (
       
            <div className="invoice-container">
                {/* Header with Logo */}
                <header className="invoice-header">
                  <div className="col-sm-6">
                    <img src="/assets/img/logo.png" alt="logo" width="70%" />
                  </div>
                  <div className="col-sm-6">
                    <h1>Order Invoice</h1>
                  </div>           
                </header>

                {/* Order and Customer Details */}
                <section className="invoice-details">
                    <table className="details-table">
                        <tbody>
                            <tr>
                                <th>Order ID:</th>
                                <td>#{order.id}</td>
                            </tr>
                            <tr>
                                <th>Customer Name:</th>
                                <td>{order.customer_name}</td>
                            </tr>
                            <tr>
                                <th>Mobile No:</th>
                                <td>{order.mobile_no}</td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td>{order.email}</td>
                            </tr>
                            <tr>
                                <th>Address:</th>
                                <td>{order.address}</td>
                            </tr>
                            <tr>
                                <th>Order Date:</th>
                                <td>{order.order_date}</td>
                            </tr>
                            <tr>
                                <th>Payment Method:</th>
                                <td>{order.payment_method}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Order Summary Table */}
                <section className="order-summary">
                    <h2>Order Summary</h2>
                    <table className="summary-table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.items && order.items.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.productname}</td>
                                    <td>{item.quantity}</td>
                                    <td>৳{item.price}</td>
                                    <td>৳{item.price * item.quantity}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="3" className="subtotal-label">Sub Total</td>
                                <td>৳{order.total_amount - 50}</td>
                            </tr>
                            <tr>
                                <td colSpan="3" className="shipping-label">Shipping Cost</td>
                                <td>৳50</td>
                            </tr>
                            <tr>
                                <td colSpan="3" className="grandtotal-label"><strong>Grand Total</strong></td>
                                <td><strong>৳{order.total_amount}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <div className="invoice-contact clearfix text-center">
                  <div className="row g-0">
                    <div className="col-sm-12">
                      <div className="contact-info">
                        <a href="#">
                          <i className="fa fa-phone"></i> +800 01572 378254
                        </a>
                        <a href="#">
                          <i className="fa fa-envelope"></i> e-shopper@gmail.com
                        </a>
                        <a href="#" className="mr-0 d-none-580">
                          <i className="fa fa-map-marker"></i> 169 Bordighir Phar, Chattogram, Bangladesh
                        </a>
                      </div>
                    </div>
                  </div>
                </div><br/>
                <div className="invoice-btn-section clearfix d-print-none text-center">
                  <button onClick={() => window.print()} className="btn btn-lg btn-print">
                    <i className="fa fa-print"></i> Print Invoice
                  </button>
                </div>
            </div>
        
    );
}

export default Invoice;
