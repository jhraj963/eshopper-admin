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
        axios.delete(`${process.env.REACT_APP_API_URL}/blog/${id}`).then(function () {
            getDatas();
        });
    };

    return (
        <AdminLayout>
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
                                    <Link to={'/blog/add'} className="btn btn-success float-end">
                                        Add New
                                    </Link>
                                        <table className="table table-bordered mb-0 text-center table-info">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: '20%' }}><h5>Post Title</h5></th>
                                                    <th style={{ width: '15%' }}><h5>Author</h5></th>
                                                    <th style={{ width: '15%' }}><h5>Date</h5></th>
                                                    <th style={{ width: '25%' }}><h5>Overview</h5></th>
                                                    <th style={{ width: '10%' }}><h5>Photo</h5></th>
                                                    <th style={{ width: '15%' }}><h5>Actions</h5></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data && data.map((d) => (
                                                    <tr key={d.id}>
                                                        <td className="truncate">{d.title}</td>
                                                        <td className="truncate">{d.author}</td>
                                                        <td className="truncate">{d.date}</td>
                                                        <td className="truncate">{d.overview}</td>
                                                        <td>
                                                            {d.photo.split(',').map((src, i) => (
                                                                <img
                                                                    key={i}
                                                                    src={`${process.env.REACT_APP_BACKEND_URL}${src}`}
                                                                    alt="No Image"
                                                                    className="cell-image"
                                                                />
                                                            ))}
                                                        </td>
                                                        <td>
                                                            <div className="action-buttons">
                                                                <Link to={`/blog/edit/${d.id}`} className="btn btn-info me-2">
                                                                    Edit
                                                                </Link>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => deleteData(d.id)}
                                                                    className="btn btn-danger">Delete
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Blog;
