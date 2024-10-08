import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Blog() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/blog/`).then(function (response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/blog/${id}`).then(function (response) {
            getDatas();
        });
    }
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Blog</h3>
                        <p>Manage blog posts for your online store.</p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                    <Link to={'/blog/add'} className='btn btn-primary float-end' >Add New</Link>
                                        <table className="table table-bordered mb-0 text-center table-info">
                                            <thead>
                                                <tr>
                                                    <th><h5>Post Title</h5></th>
                                                    <th><h5>Author</h5></th>
                                                    <th><h5>Date</h5></th>
                                                    <th><h5>Actions</h5></th>
                                                </tr>
                                            </thead>
                                           <tbody>
                                            {data && data.map((d, key) =>
                                                <tr key={d.id}>
                                                    <td>{d.title}</td>
                                                    <td>{d.author}</td>
                                                    <td>{d.date}</td>
                                                    <td>
                                                        <Link to={`/blog/edit/${d.id}`} className='btn btn-info' >Edit</Link>
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

export default Blog