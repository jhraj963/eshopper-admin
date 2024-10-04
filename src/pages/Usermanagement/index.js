import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Usermanagement() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>User Management</h3>
                        <p>Manage users who have access to the admin panel.</p>
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
                                                <th>Username</th>
                                                <th>Email</th>
                                                <th>Role</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                             {/* Sample User Row  */}
                                            <tr>
                                                <td>admin</td>
                                                <td>admin@example.com</td>
                                                <td>Administrator</td>
                                                <td>
                                                    <button class="btn btn-info">Edit</button>
                                                    <button class="btn btn-dark">Delete</button>
                                                </td>
                                            </tr>
                                            {/* More user rows will go here  */}
                                        </tbody>
                                        <tbody>
                                             {/* Sample User Row  */}
                                            <tr>
                                                <td>admin</td>
                                                <td>admin@example.com</td>
                                                <td>Administrator</td>
                                                <td>
                                                    <button class="btn btn-info">Edit</button>
                                                    <button class="btn btn-dark">Delete</button>
                                                </td>
                                            </tr>
                                            {/* More user rows will go here  */}
                                        </tbody>
                                        <tbody>
                                             {/* Sample User Row  */}
                                            <tr>
                                                <td>admin</td>
                                                <td>admin@example.com</td>
                                                <td>Administrator</td>
                                                <td>
                                                    <button class="btn btn-info">Edit</button>
                                                    <button class="btn btn-dark">Delete</button>
                                                </td>
                                            </tr>
                                            {/* More user rows will go here  */}
                                        </tbody>
                                    </table>
                                    <form>
                                        <h4>Add New User</h4>
                                        <label forhtml="new-username">Username:</label>
                                        <input type="text" id="new-username" required />

                                        <label forhtml="new-email">Email:</label>
                                        <input type="email" id="new-email" required />

                                        <label forhtml="new-role">Role:</label>
                                        <select id="new-role" required>
                                            <option value="admin">Administrator</option>
                                            <option value="editor">Editor</option>
                                            <option value="viewer">Viewer</option>
                                        </select>

                                        <button type="submit" class="btn btn-primary">Add User</button>
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

export default Usermanagement