import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Salesevents() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Sales Events</h3>
                        <p>Manage and create sales events to attract customers.</p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                    <table className="table table-bordered mb-0 text-center">
                                        <thead>
                                            <tr>
                                                <th>Event Name</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Discount</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          {/* Sample Sales Event Row  */}
                                            <tr>
                                                <td>Black Friday Sale</td>
                                                <td>2023-11-24</td>
                                                <td>2023-11-30</td>
                                                <td>30%</td>
                                                <td>
                                                    <button class="btn btn-warning">Edit</button>
                                                    <button class="btn btn-info">Delete</button>
                                                </td>
                                            </tr>
                                            {/* More sales events will go here */}
                                        </tbody>
                                        <tbody>
                                          {/* Sample Sales Event Row  */}
                                            <tr>
                                                <td>Black Friday Sale</td>
                                                <td>2023-11-24</td>
                                                <td>2023-11-30</td>
                                                <td>30%</td>
                                                <td>
                                                    <button class="btn btn-warning">Edit</button>
                                                    <button class="btn btn-info">Delete</button>
                                                </td>
                                            </tr>
                                            {/* More sales events will go here */}
                                        </tbody>
                                        <tbody>
                                          {/* Sample Sales Event Row  */}
                                            <tr>
                                                <td>Black Friday Sale</td>
                                                <td>2023-11-24</td>
                                                <td>2023-11-30</td>
                                                <td>30%</td>
                                                <td>
                                                    <button class="btn btn-warning">Edit</button>
                                                    <button class="btn btn-info">Delete</button>
                                                </td>
                                            </tr>
                                            {/* More sales events will go here */}
                                        </tbody>
                                    </table>
                                    <form>
                                        <h4>Add New Sales Event</h4>
                                        <label forhtml="event-name">Event Name:</label>
                                        <input type="text" id="event-name" required />

                                        <label forhtml="event-start">Start Date:</label>
                                        <input type="date" id="event-start" required />

                                        <label forhtml="event-end">End Date:</label>
                                        <input type="date" id="event-end" required />

                                        <label forhtml="event-discount">Discount:</label>
                                        <input type="number" id="event-discount" required />

                                        <button type="submit" class="btn btn-primary">Create Sales Event</button>
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

export default Salesevents