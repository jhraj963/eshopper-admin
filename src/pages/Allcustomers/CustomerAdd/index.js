import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function CustomerAdd() {
    const [inputs, setInputs] = useState({ id: '', name: '', email: '', phone: '', registration_date: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/allcustomer/${id}`).then(function (response) {
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
                apiurl = `/allcustomer/edit/${inputs.id}`;
            } else {
                apiurl = `/allcustomer/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/Allcustomers')
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
                            <h3>Add New Customer</h3>
                            
                        </div>
                    </div>
                    <div className="card-header">
                        <Link to={'/Allcustomers'} className='btn btn-primary float-left' >Back to List</Link>
                    </div>
                    <div className="row" id="table-bordered">
                        <div className="col-12">
                            <div className="card">

                                <div className="card-content">
                                    <div className="table-responsive">
                                        <div className="card-content">
                                            <form className="form form-vertical" onSubmit={handleSubmit}>

                                            <div className="form-group">
                                                <label forhtml="title">Customer Name:</label>
                                                <input defaultValue={inputs.name} name="name" onChange={handleChange} type="text" id="name" className="form-control" required />
                                            </div>

                                            <div className="form-group">
                                                <label forhtml="title">Email:</label>
                                                <input defaultValue={inputs.email} name="email" onChange={handleChange} type="text" id="email" className="form-control" required />
                                            </div>

                                            <div className="form-group">
                                                <label forhtml="title">Phone:</label>
                                                <input defaultValue={inputs.phone} name="phone" onChange={handleChange} type="text" id="phone" className="form-control" required />
                                            </div>

                                            <div className="form-group">
                                                <label forhtml="title">Registration Date:</label>
                                                <input defaultValue={inputs.registration_date} name="registration_date" onChange={handleChange} type="date" id="registration_date" className="form-control" required />
                                            </div>
                                            

                                            <button type="submit" class="btn btn-primary">Create New Customer</button>
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

export default CustomerAdd