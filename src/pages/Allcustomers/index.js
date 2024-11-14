import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Allcustomers() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/customers/`).then(function (response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/customers/${id}`).then(function (response) {
            getDatas();
        });
    }
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>All Customers</h3>
                            <p>Manage and view all customers who have registered in your store.</p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                    {/* <Link to={'/allcustomer/add'} className='btn btn-success float-end' >Add New</Link> */}
                                    <table className="table table-bordered mb-0 text-center table-info">
                                        <thead class="table-danger">
                                            <tr>
                                                <th><h5>ID No.</h5></th>
                                                <th><h5>Customer Name</h5></th>
                                                <th><h5>Email</h5></th>
                                                <th><h5>Phone</h5></th>
                                                <th><h5>Address</h5></th>
                                                <th><h5>Registration Date</h5></th>
                                                
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                            {data && data.map((d, key) =>
                                                <tr key={d.id}>
                                                    <td>{d.id}</td>
                                                    <td>{d.full_name}</td>
                                                    <td>{d.email}</td>
                                                    <td>{d.phone}</td>
                                                    <td>{d.address}</td>
                                                    <td>{d.created_at}</td>
                                                    {/* <td>
                                                        <Link to={`/allcustomer/edit/${d.id}`} className='btn btn-info' >Edit</Link>
                                                        <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                                                    </td> */}
                                                </tr>
                                            )}
                                        </tbody>
                                        
                                    </table>
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

export default Allcustomers