import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Customerreports() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Customer Reports</h3>
                        <p>Analyze customer data and behavior.</p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                    <form>
                                        <label forhtml="customer-date-from">From:</label>
                                        <input type="date" id="customer-date-from" required />

                                        <label forhtml="customer-date-to">To:</label>
                                        <input type="date" id="customer-date-to" required />

                                        <button type="submit" class="btn btn-danger">Generate Report</button>
                                    </form>
                                    <table className="table table-bordered mb-0 text-center">
                                        <thead>
                                            <tr>
                                                <th>Customer Name</th>
                                                <th>Email</th>
                                                <th>Total Orders</th>
                                                <th>Total Spent</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Sample Customer Report Row  */}
                                            <tr>
                                                <td>Jane Smith</td>
                                                <td>jane@example.com</td>
                                                <td>5</td>
                                                <td>$499.95</td>
                                            </tr>
                                            {/* More customer report rows will go here */}
                                        </tbody>
                                        <tbody>
                                            {/* Sample Customer Report Row  */}
                                            <tr>
                                                <td>Jane Smith</td>
                                                <td>jane@example.com</td>
                                                <td>5</td>
                                                <td>$499.95</td>
                                            </tr>
                                            {/* More customer report rows will go here */}
                                        </tbody>
                                        <tbody>
                                            {/* Sample Customer Report Row  */}
                                            <tr>
                                                <td>Jane Smith</td>
                                                <td>jane@example.com</td>
                                                <td>5</td>
                                                <td>$499.95</td>
                                            </tr>
                                            {/* More customer report rows will go here */}
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

export default Customerreports