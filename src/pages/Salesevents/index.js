import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Salesevents() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/salesevent`).then(function (response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/salesevent/${id}`).then(function (response) {
            getDatas();
        });
    }
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
                <div className="card-header">
                                <Link to={'/salesevents/add'} className='btn btn-primary float-left' >Add New</Link>
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
                                                {/* <th>Discount</th> */}
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.map((d, key) =>
                                                <tr key={d.id}>
                                                   
                                                    <td>{d.eventname}</td>
                                                    <td>{d.startdate}</td>
                                                    <td>{d.enddate}</td>
                                                    {/* <td>{d.discount}</td> */}
                                                    <td>
                                                        <Link to={`/salesevents/edit/${d.id}`} className='btn btn-info' >Edit</Link>
                                                        <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>

                                    </table>
                                    {/* <form>
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
                                    </form> */}
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