import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Salesreports() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Sales Reports</h3>
                        <p>View and analyze sales data for better decision-making.</p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                    <form>
                                        <label forhtml="sales-date-from">From:</label>
                                        <input type="date" id="sales-date-from" required />

                                        <label forhtml="sales-date-to">To:</label>
                                        <input type="date" id="sales-date-to" required />

                                        <button class="btn btn-secondary" type="submit">Generate Report</button>
                                    </form>
                                    <table className="table table-bordered mb-0 text-center">
                                        <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Customer Name</th>
                                                <th>Total Amount</th>
                                                <th>Order Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           {/* Sample Sales Report Row  */}
                                            <tr>
                                                <td>#12345</td>
                                                <td>Jane Smith</td>
                                                <td>$99.99</td>
                                                <td>2023-01-15</td>
                                            </tr>
                                          {/* More sales report rows will go here  */}
                                        </tbody>
                                        <tbody>
                                           {/* Sample Sales Report Row  */}
                                            <tr>
                                                <td>#12345</td>
                                                <td>Jane Smith</td>
                                                <td>$99.99</td>
                                                <td>2023-01-15</td>
                                            </tr>
                                          {/* More sales report rows will go here  */}
                                        </tbody>
                                        <tbody>
                                           {/* Sample Sales Report Row  */}
                                            <tr>
                                                <td>#12345</td>
                                                <td>Jane Smith</td>
                                                <td>$99.99</td>
                                                <td>2023-01-15</td>
                                            </tr>
                                          {/* More sales report rows will go here  */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>



      </>







    </AdminLayout>
  )
}

export default Salesreports