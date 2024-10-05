import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Helpcenter() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Help Center</h3>
                        <p>
                        If you have any questions or need assistance, visit our Help Center for FAQs and support resources.
                        </p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                    <ul class="list-group">
                                        <li class="list-group-item"><a href="faq.html">Frequently Asked Questions</a></li>
                                        <li class="list-group-item"><a href="contact-support.html">Contact Support</a></li>
                                        <li class="list-group-item"><a href="community-forum.html">Community Forum</a></li>
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

export default Helpcenter