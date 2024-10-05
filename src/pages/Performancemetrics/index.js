import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Performancemetrics() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                          <h3>Performance Metrics</h3>
                          
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                      <div className="card-content">
                                          <table className="table table-bordered text-center">
                                            <thead>
                                                <tr>
                                                    <th>Metric</th>
                                                    <th>Value</th>
                                                    <th>Trend</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Page Views</td>
                                                    <td>1,500</td>
                                                    <td><span className="badge badge-success">↑ 10%</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Unique Visitors</td>
                                                    <td>1,200</td>
                                                    <td><span className="badge badge-danger">↓ 5%</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Average Session Duration</td>
                                                    <td>3 min 45 sec</td>
                                                    <td><span className="badge badge-success">↑ 15%</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Bounce Rate</td>
                                                    <td>40%</td>
                                                    <td><span className="badge badge-warning">Stable</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                      </div>
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

export default Performancemetrics