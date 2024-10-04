import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Storesettings() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Store Settings</h3>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                    <form className="form form-vertical" >
                                                      
                                        <label forhtml="store-name">Store Name:</label>
                                        <input type="text" id="store-name" required /><br/><br/>

                                        <label forhtml="store-email">Store Email:</label>
                                        <input type="email" id="store-email" required /><br/><br/>

                                        <label forhtml="store-phone">Store Phone:</label>
                                        <input type="tel" id="store-phone" required /><br/><br/>

                                        <label forhtml="store-address">Store Address:</label>
                                        <textarea id="store-address" required></textarea><br/><br/>

                                        <button type="submit" class="btn btn-warning">Save Settings</button>
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

export default Storesettings