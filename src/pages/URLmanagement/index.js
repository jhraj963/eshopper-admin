import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function URLmanagement() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>URL Management</h3>
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
                                                        <th>Current URL</th>
                                                        <th>New URL</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Home</td>
                                                        <td>/home</td>
                                                        <td>
                                                            <input type="text" value="/welcome" />
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-info">Update</button>
                                                            <button className="btn btn-danger">Delete</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Products</td>
                                                        <td>/products</td>
                                                        <td>
                                                            <input type="text" value="/shop" />
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-info">Update</button>
                                                            <button className="btn btn-danger">Delete</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>FAQs</td>
                                                        <td>/faqs</td>
                                                        <td>
                                                            <input type="text" value="/frequently-asked-questions" />
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-info">Update</button>
                                                            <button className="btn btn-danger">Delete</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <form>
                                                <h5>Add New URL</h5>
                                                <input type="text" name="urlPage" placeholder="Page" required/>
                                                <input type="text" name="currentUrl" placeholder="Current URL" required/>
                                                <input type="text" name="newUrl" placeholder="New URL" required/>
                                                <button type="submit" className="btn btn-primary">Create URL</button>
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

export default URLmanagement