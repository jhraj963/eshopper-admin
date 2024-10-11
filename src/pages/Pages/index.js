import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Pages() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/page/`).then(function (response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/page/${id}`).then(function (response) {
            getDatas();
        });
    }
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Pages</h3>
                        <p>Manage the static pages of your online store.</p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                    <Link to={'/page/add'} className='btn btn-success float-end' >Add New Page</Link>
                                     <table className="table table-bordered mb-0 text-center">
                                        <thead>
                                            <tr>
                                                <th>Page Title</th>
                                                <th>Slug</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.map((d, key) =>
                                                <tr key={d.id}>
                                                    <td>{d.title}</td>
                                                    <td>{d.slug}</td>
                                                    <td>
                                                        <Link to={`/page/edit/${d.id}`} className='btn btn-info' >Edit</Link>
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



      </>







    </AdminLayout>
  )
}

export default Pages