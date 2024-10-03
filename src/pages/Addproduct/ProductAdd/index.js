import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

function ProductAdd() {
    const [inputs, setInputs] = useState({ id: '', productname: '', description: '', price: '', quantity: '', category: '', photo: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/addproduct/${id}`).then(function (response) {
            setInputs(response.data.data);
        });
    }

    useEffect(() => {
        if (id) {
            getDatas();
        }
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs)

        try {
            let apiurl = '';
            if (inputs.id != '') {
                apiurl = `/addproduct/edit/${inputs.id}`;
            } else {
                apiurl = `/addproduct/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/addproduct')
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <AdminLayout>
            <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-12 col-md-6 order-md-1 order-last">
                            <h3>Add New Product</h3>
                        </div>
                        <div className="col-12 col-md-6 order-md-2 order-first">
                            <nav aria-label="breadcrumb" className='breadcrumb-header'>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Add New</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <section id="basic-vertical-layouts">
                    <div className="row match-height">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-body">
                                        <form className="form form-vertical" onSubmit={handleSubmit}>
                                            <div className="form-body">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label for="first-name-vertical">Product Name</label>
                                                            <input type="text" id="first-name-vertical" className="form-control" defaultValue={inputs.productname} name="productname" onChange={handleChange} placeholder="Product Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label for="email-id-vertical">Description</label>
                                                            <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.description} name="description" onChange={handleChange} placeholder="Description" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label for="email-id-vertical">Price</label>
                                                            <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.price} name="price" onChange={handleChange} placeholder="Price" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label for="email-id-vertical">Quantity</label>
                                                            <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.quantity} name="quantity" onChange={handleChange} placeholder="Quantity" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label for="email-id-vertical">Category</label>
                                                            <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.category} name="category" onChange={handleChange} placeholder="Category" />
                                                        </div>
                                                    </div>

                                                    {/* <div className="col-12">
                                                        <div className="form-group">
                                                            <label for="email-id-vertical">Photo</label>
                                                            <input type="file" id="email-id-vertical" className="form-control" defaultValue={inputs.photo} name="photo" onChange={handleChange} placeholder="Photo" />
                                                        </div>
                                                    </div> */}

                                                    <div className="col-12 d-flex justify-content-end">
                                                        <button type="submit" className="btn btn-primary mr-1 mb-1">Submit</button>
                                                        <button type="reset" className="btn btn-light-secondary mr-1 mb-1">Reset</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </AdminLayout>
    )
}

export default ProductAdd