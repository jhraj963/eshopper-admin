import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function OrderAdd() {
    const [inputs, setInputs] = useState({ id: '', customer_id: '', customer_name: '', order_date: '', total_amount: '', status: ''});
    const navigate = useNavigate();
    const { id } = useParams();
    const [customer, setCustomer] = useState([]);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/allorder/${id}`).then(function (response) {
            setInputs(response.data.data);
        });
    }

    const getRelational = async (e) => {
        let zoneres = await axios.get(`/allcustomer`)
        setCustomer(zoneres.data.data);
    }

    useEffect(() => {
        if (id) {
            getDatas();
        }
        getRelational()
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
                apiurl = `/allorder/edit/${inputs.id}`;
            } else {
                apiurl = `/allorder/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/Allorders')
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
                            <h3>Add New Order</h3>
                            
                        </div>
                    </div>
                    <div className="card-header">
                        <Link to={'/Allorders'} className='btn btn-primary float-left' >Back to List</Link>
                    </div>
                    <div className="row" id="table-bordered">
                        <div className="col-12">
                            <div className="card">

                                <div className="card-content">
                                    <div className="table-responsive">
                                        <div className="card-content">
                                            <form className="form form-vertical" onSubmit={handleSubmit}>

                                            <div className="form-group">
                                                <label forhtml="title">Order ID (Unique):</label>
                                                <input defaultValue={inputs.order_id} name="order_id" onChange={handleChange} type="text" id="order_id" className="form-control" required />
                                            </div>

                                            <div className="form-group">
                                                <label forhtml="title">Customer ID:</label>
                                                {/* <input defaultValue={inputs.customer_name} name="customer_name" onChange={handleChange} type="text" id="customer_name" 
                                                className="form-control" required /> */}
                                                <select
                                                    className="form-control"
                                                    id="customer_id"
                                                    name="customer_id"
                                                    value={inputs.customer_id}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select Customer</option>
                                                    {customer.map((d) => (
                                                        <option key={d.id} value={d.id}>{d.full_name}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label forhtml="title">Customer Name:</label>
                                                <input defaultValue={inputs.customer_name} name="customer_name" onChange={handleChange} type="text" id="customer_name" className="form-control" required />
                                            </div>

                                            <div className="form-group">
                                                <label forhtml="title">Date:</label>
                                                <input defaultValue={inputs.order_date} name="order_date" onChange={handleChange} type="date" id="order_date" className="form-control" required />
                                            </div>

                                            <div className="form-group">
                                                <label forhtml="title">Total Amount:</label>
                                                <input defaultValue={inputs.total_amount} name="total_amount" onChange={handleChange} type="text" id="total_amount" className="form-control" required />
                                            </div>

                                            <div className="form-group">
                                                <label forhtml="title">Status:</label>
                                                <input defaultValue={inputs.status} name="status" onChange={handleChange} type="text" id="status" className="form-control" required />
                                            </div>
                                            
                                            <button type="submit" class="btn btn-primary">Create New Order</button>
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

export default OrderAdd