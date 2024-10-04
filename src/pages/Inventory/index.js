import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Inventory() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Inventory</h3>
                      <p>Monitor and manage the inventory of your products.</p>
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
                                                <th>Product Name</th>
                                                <th>Current Stock</th>
                                                <th>Reorder Level</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-info">
                                                <td>Sample Product</td>
                                                <td>50</td>
                                                <td>10</td>
                                                <td>
                                                    <button className='btn btn-info text-dark' >Edit Stock</button>
                                                </td> 
                                        </tbody>
                                        <tbody class="table-info">
                                                <td>Sample Product</td>
                                                <td>50</td>
                                                <td>10</td>
                                                <td>
                                                    <button className='btn btn-info text-dark' >Edit Stock</button>
                                                </td> 
                                        </tbody>
                                        <tbody class="table-info">
                                                <td>Sample Product</td>
                                                <td>50</td>
                                                <td>10</td>
                                                <td>
                                                    <button className='btn btn-info text-dark' >Edit Stock</button>
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

export default Inventory