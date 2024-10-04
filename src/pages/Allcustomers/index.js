import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Allcustomers() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>All Customers</h3>
                            <p>Manage and view all customers who have registered in your store.</p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                    <table className="table table-bordered mb-0 text-center">
                                        <thead class="table-danger">
                                            <tr>
                                                <th>Customer Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Registration Date</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-info">
                                                <td>John Doe</td>
                                                <td>john@example.com</td>
                                                <td>(123) 456-7890</td>
                                                <td>2023-01-01</td>
                                                <td>
                                                    <button className='btn btn-info text-dark' >Edit</button>
                                                    <button className='btn btn-danger text-dark' >Delete</button>
                                                </td> 
                                        </tbody>
                                        <tbody class="table-info">
                                                <td>John Doe</td>
                                                <td>john@example.com</td>
                                                <td>(123) 456-7890</td>
                                                <td>2023-01-01</td>
                                                <td>
                                                    <button className='btn btn-info text-dark' >Edit</button>
                                                    <button className='btn btn-danger text-dark' >Delete</button>
                                                </td> 
                                        </tbody>
                                        <tbody class="table-info">
                                                <td>John Doe</td>
                                                <td>john@example.com</td>
                                                <td>(123) 456-7890</td>
                                                <td>2023-01-01</td>
                                                <td>
                                                    <button className='btn btn-info text-dark' >Edit</button>
                                                    <button className='btn btn-danger text-dark' >Delete</button>
                                                </td> 
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

export default Allcustomers