import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Metatags() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                          <h3>Meta Tags</h3>
                          
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
                                                <th>Page</th>
                                                <th>Meta Title</th>
                                                <th>Meta Description</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Home</td>
                                                <td>Welcome to Our Store</td>
                                                <td>Your one-stop shop for everything!</td>
                                                <td>
                                                    <button className="btn btn-info">Edit</button>
                                                    <button className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>About Us</td>
                                                <td>About Our Company</td>
                                                <td>Learn more about us and our mission.</td>
                                                <td>
                                                    <button className="btn btn-info">Edit</button>
                                                    <button className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Contact</td>
                                                <td>Get in Touch</td>
                                                <td>Reach out to us for any inquiries.</td>
                                                <td>
                                                    <button className="btn btn-info">Edit</button>
                                                    <button className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <form>
                                        <h5>Add New Meta Tag</h5>
                                        <input type="text" name="page" placeholder="Page" required/>
                                        <input type="text" name="title" placeholder="Meta Title" required/>
                                        <textarea name="description" placeholder="Meta Description" required></textarea>
                                        <button type="submit" className="btn btn-primary">Create Meta Tag</button>
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

export default Metatags