import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Categories() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/category/`).then(function (response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/category/${id}`).then(function (response) {
            getDatas();
        });
    }
  return (
    <AdminLayout>
        <div className="main-content container-fluid">
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-6 order-md-1 order-last">
                          <h3> All Categories</h3>
                    </div>
                  
                </div>
            </div>

            <div className="row" id="table-bordered">
            <div className="col-12">
                <div className="card">
                <div className="card-header">
                    <Link to={'/Categories/add'} className='btn btn-success float-end' >Add New</Link>
                </div>
                <div className="card-content">
                    <div className="table-responsive">
                                  <table className="table table-bordered mb-0 text-center table-info">
                            <thead>
                                <tr>
                                    <th>Categories Name</th>
                                    <th>Categories Description</th>
                                    <th>Status</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                            {data && data.map((d, key) =>
                                <tr key={d.id}>
                                    <td>{d.name}</td>
                                    <td>{d.description}</td>
                                    <td>{d.status}</td>
                                    {/* <td>{d.status? `active`:`Inactive`}</td> */}
                                    <td>
                                        <Link to={`/category/edit/${d.id}`} className='btn btn-info' >Edit</Link>
                                        <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                                    </td>
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

    </AdminLayout>    
  )
}

export default Categories