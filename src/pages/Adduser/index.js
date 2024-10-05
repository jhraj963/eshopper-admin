import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Adduser() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                          <h3>Add User</h3>
                          
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                      <form>
                                          <div className="form-group">
                                              <label for="username">Username:</label>
                                              <input type="text" id="username" className="form-control" required />
                                          </div>
                                          <div className="form-group">
                                              <label for="email">Email:</label>
                                              <input type="email" id="email" className="form-control" required />
                                          </div>
                                          <div className="form-group">
                                              <label for="password">Password:</label>
                                              <input type="password" id="password" className="form-control" required />
                                          </div>
                                          <div className="form-group">
                                              <label for="role">Role:</label>
                                              <select id="role" className="form-control">
                                                  <option value="admin">Admin</option>
                                                  <option value="editor">Editor</option>
                                                  <option value="viewer">Viewer</option>
                                              </select>
                                          </div>
                                          <button type="submit" className="btn btn-primary">Add User</button>
                                      </form>
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

export default Adduser