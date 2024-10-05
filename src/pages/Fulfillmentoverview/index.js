import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Fulfillmentoverview() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                          <h3>Order Fulfillment Overview</h3>
                          
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                      <div className="card-content">
                                          <table class="table table-bordered text-center">
                                              <thead>
                                                  <tr>
                                                      <th>Order ID</th>
                                                      <th>Shipping Provider</th>
                                                      <th>Tracking Number</th>
                                                      <th>Payment Status</th>
                                                      <th>Actions</th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  <tr>
                                                      <td>1001</td>
                                                      <td>FedEx</td>
                                                      <td>123456789</td>
                                                      <td><span class="badge badge-success">Completed</span></td>
                                                      <td>
                                                          <button class="btn btn-warning">Edit</button>
                                                          <button class="btn btn-danger">Delete</button>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td>1002</td>
                                                      <td>UPS</td>
                                                      <td>987654321</td>
                                                      <td><span class="badge badge-warning">Pending</span></td>
                                                      <td>
                                                          <button class="btn btn-warning">Edit</button>
                                                          <button class="btn btn-danger">Delete</button>
                                                      </td>
                                                  </tr>
                                                  {/* More orders can be listed here */}
                                              </tbody>
                                          </table>
                                      </div>
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

export default Fulfillmentoverview