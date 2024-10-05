import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Activitylog() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                          <h3>Activity Log</h3>
                          
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
                                                  <th>Date</th>
                                                  <th>Username</th>
                                                  <th>Activity</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>2024-10-01</td>
                                                  <td>john_doe</td>
                                                  <td>Logged in</td>
                                              </tr>
                                              <tr>
                                                  <td>2024-10-02</td>
                                                  <td>jane_smith</td>
                                                  <td>Updated profile</td>
                                              </tr>
                                              <tr>
                                                  <td>2024-10-03</td>
                                                  <td>john_doe</td>
                                                  <td>Edited product details</td>
                                              </tr>
                                              {/* More activity logs can be added here */}
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

export default Activitylog