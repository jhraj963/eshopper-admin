import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Invoice({ customerId }) {
  const [data, setData] = useState([]);
  const [customer, setCustomer] = useState(null); // State for customer data

  useEffect(() => {
    getDatas();
    getCustomerData(); // Fetch customer data
  }, [customerId]);

  const getDatas = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/orders?customerId=${customerId}`) // Correct endpoint
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching order data:', error);
      });
  };

  const getCustomerData = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/customers/${customerId}`) // Fetch customer details
      .then((response) => {
        setCustomer(response.data.data); // Assuming the API returns customer data
      })
      .catch((error) => {
        console.error('Error fetching customer data:', error);
      });
  };

  const calculateSubtotal = () => {
    return data.reduce((sum, item) => {
      const price = item.price || 0;
      const quantity = item.quantity || 0;
      return sum + price * quantity;
    }, 0);
  };

  const TAX_RATE = 0.12; // Assuming 12% tax rate
  const subtotal = calculateSubtotal();
  const tax = subtotal * TAX_RATE;
  const grandTotal = subtotal + tax;

  return (
    <div className="invoice-1 invoice-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="invoice-inner clearfix">
              <div className="invoice-info clearfix" id="invoice_wrapper">
                <div className="invoice-header">
                  <div className="row g-0">
                    <div className="col-sm-6">
                      <div className="invoice-logo">
                        <div className="logo">
                          <img src="assets/img/logo.png" alt="logo" width="50%" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 invoice-id">
                      <div className="info">
                        <h2 className="color-white inv-header-1">Invoice</h2>
                        <p className="color-white mb-1">Invoice Number <span>#45613</span></p>
                        <p className="color-white mb-0">Invoice Date <span>{new Date().toLocaleDateString()}</span></p>
                      </div>
                    </div>
                  </div>
                </div><br />
                <div className="invoice-top">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="invoice-number mb-30">
                        <h4 className="inv-title-1">Invoice To</h4>
                        <h2 className="name mb-10">{customer ? customer.customer_name : 'Loading...'}</h2>
                        <p className="invo-addr-1">
                          {customer ? customer.address : 'Loading...'} <br />
                          {customer ? customer.email : 'Loading...'} <br />
                          {customer ? customer.mobile_no : 'Loading...'} <br />
                          {customer ? `${customer.city}, ${customer.state}, ${customer.country}, ${customer.zip_code}` : 'Loading...'}
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="invoice-number mb-30">
                        <h4 className="inv-title-1 text-bold">Invoice From</h4>
                        <h2 className="name mb-10">E-SHOPPER</h2>
                        <p className="invo-addr-1">
                          e-shopper@gmail.com <br />
                          Bordighir Phar <br />
                          Chattogram, Bangladesh <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="invoice-center">
                  <div className="table-responsive">
                    <table className="table mb-0 table-striped invoice-table">
                      <thead className="bg-active">
                        <tr>
                          <th>No.</th>
                          <th className="pl0 text-start">Item Description</th>
                          <th className="text-center">Price</th>
                          <th className="text-center">Quantity</th>
                          <th className="text-end">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index}>
                            <td><div className="item-desc-1"><span>{index + 1}</span></div></td>
                            <td className="pl0">{item.description || 'N/A'}</td>
                            <td className="text-center">${(item.price || 0).toFixed(2)}</td>
                            <td className="text-center">{item.quantity || 0}</td>
                            <td className="text-end">${((item.price || 0) * (item.quantity || 0)).toFixed(2)}</td>
                          </tr>
                        ))}
                        <tr className="tr2">
                          <td colSpan="3"></td>
                          <td className="text-center">SubTotal</td>
                          <td className="text-end">৳{subtotal.toFixed(2)}</td>
                        </tr>
                        <tr className="tr2">
                          <td colSpan="3"></td>
                          <td className="text-center">Tax</td>
                          <td className="text-end">৳{tax.toFixed(2)}</td>
                        </tr>
                        <tr className="tr2">
                          <td colSpan="3"></td>
                          <td className="text-center f-w-600 active-color">Grand Total</td>
                          <td className="f-w-600 text-end active-color">৳{grandTotal.toFixed(2)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="invoice-bottom">
                  <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-7">
                      <div className="mb-30 dear-client">
                        <h3 className="inv-title-1">Terms & Conditions</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-5">
                      <div className="mb-30 payment-method">
                        <h3 className="inv-title-1">Payment Method</h3>
                        <ul className="payment-method-list-1 text-14">
                          <li><strong>Account No:</strong> 00 123 647 840</li>
                          <li><strong>Account Name:</strong> John Doe</li>
                          <li><strong>Branch Name:</strong> XYZ</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="invoice-contact clearfix">
                  <div className="row g-0">
                    <div className="col-lg-9 col-md-11 col-sm-12">
                      <div className="contact-info">
                        <a href="#">
                          <i className="fa fa-phone"></i> +800 01572 378254
                        </a>
                        <a href="#">
                          <i className="fa fa-envelope"></i> e-shopper@gmail.com
                        </a>
                        <a href="#" className="mr-0 d-none-580">
                          <i className="fa fa-map-marker"></i> 169 Chattogram, Bangladesh
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="invoice-btn-section clearfix d-print-none">
                  <button onClick={() => window.print()} className="btn btn-lg btn-print">
                    <i className="fa fa-print"></i> Print Invoice
                  </button>
                  <button id="invoice_download_btn" className="btn btn-lg btn-download btn-theme">
                    <i className="fa fa-download"></i> Download Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;