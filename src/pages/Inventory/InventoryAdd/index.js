import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function InventoryAdd() {
    const [inputs, setInputs] = useState({ id: '', product_name: '', current_stock: '', reorder_level: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/inventory/${id}`).then(function (response) {
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
                apiurl = `/inventory/edit/${inputs.id}`;
            } else {
                apiurl = `/inventory/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/inventory')
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <AdminLayout>
            <>


                <div className="main-content container-fluid">
                    <div className="page-title">
                        <div className="row">
                            <h3>Add New Blog</h3>

                        </div>
                    </div>
                    <div className="card-header">
                        <Link to={'/inventory'} className='btn btn-primary float-left' >Back to List</Link>
                    </div>
                    <div className="row" id="table-bordered">
                        <div className="col-12">
                            <div className="card">

                                <div className="card-content">
                                    <div className="table-responsive">
                                        <div className="card-content">
                                            <form className="form form-vertical" onSubmit={handleSubmit}>

                                                <div className="form-group">
                                                    <label forhtml="title">Product Name:</label>
                                                    <input defaultValue={inputs.product_name} name="product_name" onChange={handleChange} type="text" id="product_name" className="form-control" required />
                                                </div>

                                                <div className="form-group">
                                                    <label forhtml="blog-author">Current Stock:</label>
                                                    <input defaultValue={inputs.current_stock} name="current_stock" onChange={handleChange} type="text" id="current_stock" className="form-control" required />
                                                </div>

                                                <div className="form-group">
                                                    <label forhtml="blog-date">Reorder Level:</label>
                                                    <input defaultValue={inputs.reorder_level} name="reorder_level" onChange={handleChange} type="text" id="reorder_level" className="form-control" required />
                                                </div>

                                                <button type="submit" class="btn btn-primary">Create Blog Post</button>
                                            </form>
                                        </div>


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

export default InventoryAdd