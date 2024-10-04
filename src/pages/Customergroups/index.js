import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Customergroups() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Customer Groups</h3>
                        <p>Manage different groups of customers for targeted marketing and promotions.</p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <ul>
                                <li>
                                    Regular Customers <button className='btn btn-info text-dark'>Edit</button> <button className='btn btn-danger text-dark'>Delete</button>
                                </li>
                                <br/>
                                <li>
                                    VIP Customers <button className='btn btn-info text-dark'>Edit</button> <button className='btn btn-danger text-dark'>Delete</button>
                                </li>
                                {/* More customer groups will go here */}
                            </ul>
                            <form>
                                <label for="new-group">Add New Customer Group:</label>
                                <input type="text" id="new-group" required />
                                <button type="submit">Add Group</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



      </>







    </AdminLayout>
  )
}

export default Customergroups