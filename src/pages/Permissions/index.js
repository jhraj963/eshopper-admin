import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Permissions() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                          <h3>User Permissions</h3>
                          
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
                                                  <th>Username</th>
                                                  <th>Email</th>
                                                  <th>Role</th>
                                                  <th>Actions</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>john_doe</td>
                                                  <td>abc@gmail.com</td>
                                                  <td>Admin</td>
                                                  <td>
                                                      <button className="btn btn-warning">Edit</button>
                                                      <button className="btn btn-danger">Remove</button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>jane_smith</td>
                                                  <td>abc@gmail.com</td>
                                                  <td>Editor</td>
                                                  <td>
                                                      <button className="btn btn-warning">Edit</button>
                                                      <button className="btn btn-danger">Remove</button>
                                                  </td>
                                              </tr>
                                               {/* More users can be listed here */}
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

export default Permissions