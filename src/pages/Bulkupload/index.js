import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Bulkupload() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                          <h3>Bulk Upload</h3>
                          
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
                                                  <label for="file-upload">Upload CSV File:</label>
                                                  <input type="file" id="file-upload" className="form-control" accept=".csv" required />
                                              </div>
                                              <button type="submit" className="btn btn-primary">Upload</button>
                                          </form>
                                          <small className="form-text text-muted">Upload a CSV file to add or update multiple products.</small>
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

export default Bulkupload