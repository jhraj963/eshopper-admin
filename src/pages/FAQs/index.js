import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function FAQs() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>FAQs</h3>
                        <p>Manage frequently asked questions for your customers.</p>
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
                                                    <th>Question</th>
                                                    <th>Answer</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* Sample FAQ Row */}
                                                <tr>
                                                    <td>What is the return policy?</td>
                                                    <td>Our return policy lasts 30 days...</td>
                                                    <td>
                                                        <button className="btn btn-success">Edit</button>
                                                        <button className="btn btn-danger">Delete</button>
                                                    </td>
                                                </tr>
                                                {/* More FAQ rows will go here */}
                                            </tbody>
                                            <tbody>
                                                {/* Sample FAQ Row */}
                                                <tr>
                                                    <td>What is the return policy?</td>
                                                    <td>Our return policy lasts 30 days...</td>
                                                    <td>
                                                        <button className="btn btn-success">Edit</button>
                                                        <button className="btn btn-danger">Delete</button>
                                                    </td>
                                                </tr>
                                                {/* More FAQ rows will go here */}
                                            </tbody>
                                            <tbody>
                                                {/* Sample FAQ Row */}
                                                <tr>
                                                    <td>What is the return policy?</td>
                                                    <td>Our return policy lasts 30 days...</td>
                                                    <td>
                                                        <button className="btn btn-success">Edit</button>
                                                        <button className="btn btn-danger">Delete</button>
                                                    </td>
                                                </tr>
                                                {/* More FAQ rows will go here */}
                                            </tbody>
                                        </table>
                                        <form>
                                            <h4>Add New FAQ</h4>
                                            <label forhtml="faq-question">Question:</label>
                                            <input type="text" id="faq-question" required />

                                            <label forhtml="faq-answer">Answer:</label>
                                            <textarea id="faq-answer" required></textarea>

                                            <button type="submit" className="btn btn-warning">Add FAQ</button>
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

export default FAQs