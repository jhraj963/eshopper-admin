import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Shippingproviders() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                          <h3>Shipping Providers</h3>
                       
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                      <table className="table table-bordered mb-0 text-center">
                                          <thead>
                                              <tr>
                                                  <th>Provider Name</th>
                                                  <th>Status</th>
                                                  <th>Actions</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>FedEx</td>
                                                  <td>Active</td>
                                                  <td>
                                                      <button className="btn btn-success">Edit</button>
                                                      <button className="btn btn-danger">Delete</button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>UPS</td>
                                                  <td>Inactive</td>
                                                  <td>
                                                      <button className="btn btn-success">Edit</button>
                                                      <button className="btn btn-danger">Delete</button>
                                                  </td>
                                              </tr>
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

export default Shippingproviders