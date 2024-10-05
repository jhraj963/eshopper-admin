import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Googleanalytics() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Google Analytics</h3>
                        <p>Integrate your store with Google Analytics to track user behavior, conversions, and more.</p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                    <form>
                                        <div className="form-group">
                                            <label for="trackingId">Google Analytics Tracking ID</label>
                                            <input type="text" id="trackingId" className="form-control" placeholder="UA-XXXXX-Y" required/>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Save Tracking ID</button>
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

export default Googleanalytics