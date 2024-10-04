import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Inventoryreports() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Inventory Reports</h3>
                        <p>View current inventory levels and historical data.</p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                    <form>
                                        <label for="inventory-date-from">From:</label>
                                        <input type="date" id="inventory-date-from" required />

                                        <label for="inventory-date-to">To:</label>
                                        <input type="date" id="inventory-date-to" required />

                                        <button type="submit" class="btn btn-success">Generate Report</button>
                                    </form>
                                    <table className="table table-bordered mb-0 text-center">
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Current Stock</th>
                                                <th>Reorder Level</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Sample Inventory Report Row */}
                                            <tr>
                                                <td>Sample Product</td>
                                                <td>50</td>
                                                <td>20</td>
                                            </tr>
                                            {/* More inventory report rows will go here */}
                                        </tbody>
                                        <tbody>
                                            {/* Sample Inventory Report Row */}
                                            <tr>
                                                <td>Sample Product</td>
                                                <td>50</td>
                                                <td>20</td>
                                            </tr>
                                            {/* More inventory report rows will go here */}
                                        </tbody>
                                        <tbody>
                                            {/* Sample Inventory Report Row */}
                                            <tr>
                                                <td>Sample Product</td>
                                                <td>50</td>
                                                <td>20</td>
                                            </tr>
                                            {/* More inventory report rows will go here */}
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

export default Inventoryreports