import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Paymentprocessing() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                          <h3>Payment Processing</h3>
                          
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                      <div className="card-content">
                                          <form>
                                              <div className="form-group">
                                                  <label for="payment-id">Payment ID:</label>
                                                  <input type="text" id="payment-id" className="form-control" required />
                                              </div>
                                              <div className="form-group">
                                                  <label for="payment-status">Payment Status:</label>
                                                  <select id="payment-status" className="form-control">
                                                      <option value="completed">Completed</option>
                                                      <option value="pending">Pending</option>
                                                      <option value="failed">Failed</option>
                                                  </select>
                                              </div>
                                              <button type="submit" className="btn btn-success">Update Payment Status</button>
                                          </form>
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

export default Paymentprocessing