import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Stockadjustments() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                          <h3>Stock Adjustments</h3>
                          
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
                                                  <label for="product-id">Product ID:</label>
                                                  <input type="text" id="product-id" className="form-control" required />
                                              </div>
                                              <div className="form-group">
                                                  <label for="adjustment-amount">Adjustment Amount:</label>
                                                  <input type="number" id="adjustment-amount" className="form-control" required />
                                              </div>
                                              <div className="form-group">
                                                  <label for="adjustment-type">Adjustment Type:</label>
                                                  <select id="adjustment-type" className="form-control">
                                                      <option value="increase">Increase</option>
                                                      <option value="decrease">Decrease</option>
                                                  </select>
                                              </div>
                                              <button type="submit" className="btn btn-success">Adjust Stock</button>
                                          </form>
                                          <small className="form-text text-muted">Use this form to manually adjust stock levels for specific products.</small>
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

export default Stockadjustments