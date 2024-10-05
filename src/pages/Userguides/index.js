import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Userguides() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>User Guides</h3>
                        <p>
                        Access comprehensive user guides to help you navigate and utilize the features of the eCommerce platform effectively.
                        </p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                     <ul class="list-group">
                                        <li class="list-group-item"><a href="user-guide-1.html">Getting Started</a></li>
                                        <li class="list-group-item"><a href="user-guide-2.html">Managing Products</a></li>
                                        <li class="list-group-item"><a href="user-guide-3.html">Handling Orders</a></li>
                                        <li class="list-group-item"><a href="user-guide-4.html">Customer Management</a></li>
                                    </ul>
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

export default Userguides