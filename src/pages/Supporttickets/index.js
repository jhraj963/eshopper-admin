import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Supporttickets() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                          <h3>Support Tickets</h3>
                          
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
                                                  <th>Ticket ID</th>
                                                  <th>Customer Name</th>
                                                  <th>Subject</th>
                                                  <th>Status</th>
                                                  <th>Actions</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>1001</td>
                                                  <td>John Doe</td>
                                                  <td>Issue with Order #1234</td>
                                                  <td><span className="badge badge-warning">Pending</span></td>
                                                  <td>
                                                      <button className="btn btn-info">View</button>
                                                      <button className="btn btn-danger">Delete</button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>1002</td>
                                                  <td>Jane Smith</td>
                                                  <td>Refund Request</td>
                                                  <td><span className="badge badge-success">Resolved</span></td>
                                                  <td>
                                                      <button className="btn btn-info">View</button>
                                                      <button className="btn btn-danger">Delete</button>
                                                  </td>
                                              </tr>
                                              {/* More tickets can be listed here */}
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

export default Supporttickets