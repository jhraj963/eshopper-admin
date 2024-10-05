import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Shippingmanagement() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                          <h3>Shipping Management</h3>
                          
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
                                                  <label for="order-id">Order ID:</label>
                                                  <input type="text" id="order-id" className="form-control" required />
                                              </div>
                                              <div className="form-group">
                                                  <label for="shipping-provider">Shipping Provider:</label>
                                                  <select id="shipping-provider" className="form-control">
                                                      <option value="fedex">FedEx</option>
                                                      <option value="ups">UPS</option>
                                                      <option value="usps">USPS</option>
                                                      <option value="dhl">DHL</option>
                                                  </select>
                                              </div>
                                              <div className="form-group">
                                                  <label for="tracking-number">Tracking Number:</label>
                                                  <input type="text" id="tracking-number" className="form-control" required />
                                              </div>
                                              <button type="submit" className="btn btn-primary">Update Shipping Info</button>
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

export default Shippingmanagement