import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Orderstatus() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Order Status</h3>
                        <p>Manage and update the status of orders.</p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                    <form>
                                        <label forhtml="order-id">Order ID:</label>
                                        <input type="text" id="order-id" required />

                                        <label forhtml="status">New Status:</label>
                                        <select id="status" required>
                                            <option value="">Select Status</option>
                                            <option value="pending">Pending</option>
                                            <option value="shipped">Shipped</option>
                                            <option value="delivered">Delivered</option>
                                            <option value="canceled">Canceled</option>
                                        </select>

                                        <button class="btn btn-success" type="submit">Update Status</button>
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

export default Orderstatus