import React, { useEffect, useState } from 'react';
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Addproduct() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/addproduct/`).then(function (response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/addproduct/${id}`).then(function (response) {
            getDatas();
        });
    }


    return (
        <AdminLayout>
            <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-12 col-md-6 order-md-1 order-last">
                            <h3>All Products</h3>
                        </div>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <Link to={'/Addproduct/add'} className='btn btn-primary float-end' >Add New</Link>
                            </div>
                            <div className="card-content">
                                <div className="table-responsive">
                                    <table className="table table-bordered mb-0 text-center">
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Category</th>
                                                <th>Photo</th>
                                                <th>Featured Product</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.map((d, key) =>
                                                <tr key={d.id}>
                                                    <td className="text-bold-500">{d.productname}</td>
                                                    <td>{d.description}</td>
                                                    <td>{d.price}</td>
                                                    <td>{d.quantity}</td>
                                                    <td>{d.category?.name}</td>
                                                    <td>
                                                        {
                                                            d.photo.split(',').map((src, i) => (
                                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/addproduct/${src}`} alt="No Image" width="100%" height="50%" />
                                                            ))
                                                        }


                                                    </td>
                                                    <td>{d.is_featured}</td>
                                                    <td>
                                                        <Link to={`/Addproduct/edit/${d.id}`} className='btn btn-info' >Edit</Link>
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
    );
}

export default Addproduct;
