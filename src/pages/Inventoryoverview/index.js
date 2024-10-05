import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Inventoryoverview() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                          <h3>Inventory Overview</h3>
                          
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                      <table className="table table-bordered text-center">
                                          <thead>
                                              <tr>
                                                  <th>Product ID</th>
                                                  <th>Product Name</th>
                                                  <th>Stock Level</th>
                                                  <th>Actions</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>101</td>
                                                  <td>Sample Product 1</td>
                                                  <td>50</td>
                                                  <td>
                                                      <button className="btn btn-warning">Edit</button>
                                                      <button className="btn btn-danger">Delete</button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>102</td>
                                                  <td>Sample Product 2</td>
                                                  <td>20</td>
                                                  <td>
                                                      <button className="btn btn-warning">Edit</button>
                                                      <button className="btn btn-danger">Delete</button>
                                                  </td>
                                              </tr>
                                              {/* More products can be listed here */}
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

export default Inventoryoverview