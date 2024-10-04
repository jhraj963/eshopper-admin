import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Blog</h3>
                        <p>Manage blog posts for your online store.</p>
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
                                                    <th>Post Title</th>
                                                    <th>Author</th>
                                                    <th>Date</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* Sample Blog Post Row */}
                                                <tr>
                                                    <td>10 Tips for Online Shopping</td>
                                                    <td>Jane Doe</td>
                                                    <td>2023-09-15</td>
                                                    <td>
                                                        <button class="btn btn-info">Edit</button>
                                                        <button class="btn btn-dark">Delete</button>
                                                    </td>
                                                </tr>
                                               {/* More blog post rows will go here */}
                                            </tbody>
                                            <tbody>
                                                {/* Sample Blog Post Row */}
                                                <tr>
                                                    <td>10 Tips for Online Shopping</td>
                                                    <td>Jane Doe</td>
                                                    <td>2023-09-15</td>
                                                    <td>
                                                        <button class="btn btn-info">Edit</button>
                                                        <button class="btn btn-dark">Delete</button>
                                                    </td>
                                                </tr>
                                               {/* More blog post rows will go here */}
                                            </tbody>
                                            <tbody>
                                                {/* Sample Blog Post Row */}
                                                <tr>
                                                    <td>10 Tips for Online Shopping</td>
                                                    <td>Jane Doe</td>
                                                    <td>2023-09-15</td>
                                                    <td>
                                                        <button class="btn btn-info">Edit</button>
                                                        <button class="btn btn-dark">Delete</button>
                                                    </td>
                                                </tr>
                                               {/* More blog post rows will go here */}
                                            </tbody>
                                        </table>
                                        <form>
                                            <h4>Add New Blog Post</h4>
                                            <label forhtml="blog-title">Post Title:</label>
                                            <input type="text" id="blog-title" required />

                                            <label forhtml="blog-author">Author:</label>
                                            <input type="text" id="blog-author" required />

                                            <label forhtml="blog-date">Date:</label>
                                            <input type="date" id="blog-date" required />

                                            <button type="submit" class="btn btn-primary">Create Blog Post</button>
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

export default Blog