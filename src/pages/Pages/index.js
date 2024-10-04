import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Pages() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Pages</h3>
                        <p>Manage the static pages of your online store.</p>
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
                                                <th>Page Title</th>
                                                <th>Slug</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                             {/* Sample Page Row */}
                                            <tr>
                                                <td>About Us</td>
                                                <td>/about-us</td>
                                                <td>
                                                    <button class="btn btn-success">Edit</button>
                                                    <button class="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                            {/* More page rows will go here */}
                                        </tbody>
                                        <tbody>
                                             {/* Sample Page Row */}
                                            <tr>
                                                <td>About Us</td>
                                                <td>/about-us</td>
                                                <td>
                                                    <button class="btn btn-success">Edit</button>
                                                    <button class="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                            {/* More page rows will go here */}
                                        </tbody>
                                        <tbody>
                                             {/* Sample Page Row */}
                                            <tr>
                                                <td>About Us</td>
                                                <td>/about-us</td>
                                                <td>
                                                    <button class="btn btn-success">Edit</button>
                                                    <button class="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                            {/* More page rows will go here */}
                                        </tbody>
                                    </table>
                                    <form>
                                        <h4>Add New Page</h4>
                                        <label forhtml="page-title">Page Title:</label>
                                        <input type="text" id="page-title" required />

                                        <label forhtml="page-slug">Slug:</label>
                                        <input type="text" id="page-slug" required />

                                        <button type="submit" class="btn btn-warning">Create Page</button>
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

export default Pages