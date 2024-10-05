import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Notifications() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                          <h3>Notifications</h3>
                          <p>Manage notifications sent to customers and system alerts.</p>
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
                                                  <th>Date</th>
                                                  <th>Message</th>
                                                  <th>Status</th>
                                                  <th>Actions</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>2024-10-05</td>
                                                  <td>Your order has been shipped!</td>
                                                  <td><span className="badge badge-success">Read</span></td>
                                                  <td>
                                                      <button className="btn btn-warning">Mark as Unread</button>
                                                      <button className="btn btn-danger">Delete</button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>2024-10-04</td>
                                                  <td>Your payment was successful.</td>
                                                  <td><span className="badge badge-success">Read</span></td>
                                                  <td>
                                                      <button className="btn btn-warning">Mark as Unread</button>
                                                      <button className="btn btn-danger">Delete</button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>2024-10-03</td>
                                                  <td>New feature added to your dashboard!</td>
                                                  <td><span className="badge badge-warning">Unread</span></td>
                                                  <td>
                                                      <button className="btn btn-success">Mark as Read</button>
                                                      <button className="btn btn-danger">Delete</button>
                                                  </td>
                                              </tr>
                                              {/* More notification rows can go here */}
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

export default Notifications