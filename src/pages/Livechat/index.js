import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Livechat() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                          <h3>Live Chat</h3>
                          
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
                                                  <th>Chat ID</th>
                                                  <th>Customer Name</th>
                                                  <th>Started At</th>
                                                  <th>Status</th>
                                                  <th>Actions</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>2001</td>
                                                  <td>Mary Johnson</td>
                                                  <td>2024-10-05 10:00 AM</td>
                                                  <td><span className="badge badge-warning">Active</span></td>
                                                  <td>
                                                      <button className="btn btn-info">View</button>
                                                      <button className="btn btn-danger">End Chat</button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>2002</td>
                                                  <td>James Brown</td>
                                                  <td>2024-10-05 09:45 AM</td>
                                                  <td><span className="badge badge-success">Ended</span></td>
                                                  <td>
                                                      <button className="btn btn-info">View</button>
                                                      <button className="btn btn-danger">Delete</button>
                                                  </td>
                                              </tr>
                                              {/* More chats can be listed here */}
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

export default Livechat