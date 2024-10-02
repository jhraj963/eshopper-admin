import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';


function Addproduct() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/addproduct/index`).then(function (response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/addproduct/{id}`).then(function (response) {
            getDatas();
        });
    }
    return (
        <AdminLayout>
            <div className="content-wrapper" >

                <div className="row">

                    <div className="col-md-12 grid-margin">

                        <div className="card-body col-md-12">
                            {/* <div>
                                <i className="mdi mdi-access-point"></i> mdi mdi-access-point mdi mdi-access-pointmdi mdi-acce mdi mdi-access-point mdi mdi-access-pointmdi mdi-accemdi mdi-access-point mdi mdi-access-pointmdi mdi-acce
                            </div> */}
                            <form>
                                <div className="card-header">
                                    <h4 className="card-title">All Designation</h4>
                                    <Link to={'/doctor/add'} className='btn btn-primary float-right' >Add New</Link>
                                </div>
                                <div className="form-group">
                                    <label>Product Name *</label>
                                    <input type="text" className="form-control" placeholder="Enter product name" required />
                                </div>
                                <div className="form-group">
                                    <label>Product Description *</label>
                                    <textarea className="form-control" placeholder="Enter product description" rows="12" required></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Price *</label>
                                    <input type="number" className="form-control" placeholder="Enter price" required />
                                </div>
                                <div className="form-group">
                                    <label>Quantity *</label>
                                    <input type="number" className="form-control" placeholder="Enter quantity" required />
                                </div>
                                <div className="form-group">
                                    <label>Category *</label>
                                    <select className="form-control" required>
                                        <option value="">-- Select Category --</option>
                                        <option value="clothing">Clothing</option>
                                        <option value="accessories">Accessories</option>
                                        <option value="electronics">Electronics</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Product Image *</label>
                                    <input type="file" className="form-control" required />
                                </div>
                                <button type="submit" className="btn btn-primary">Add Product</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>

    )
}

export default Addproduct