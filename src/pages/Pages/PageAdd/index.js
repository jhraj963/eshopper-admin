import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function PageAdd() {
    const [inputs, setInputs] = useState({ id: '', title: '', slug: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/page/${id}`).then(function (response) {
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
                apiurl = `/page/edit/${inputs.id}`;
            } else {
                apiurl = `/page/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/Pages')
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
                            <h3>Add New Pages</h3>
                            
                        </div>
                    </div>
                    <div className="card-header">
                        <Link to={'/Pages'} className='btn btn-primary float-left' >Back to List</Link>
                    </div>
                    <div className="row" id="table-bordered">
                        <div className="col-12">
                            <div className="card">

                                <div className="card-content">
                                    <div className="table-responsive">
                                        <div className="card-content">
                                            <form className="form form-vertical" onSubmit={handleSubmit}>

                                            <div className="form-group">
                                                <label forhtml="title">Page Title:</label>
                                                <input defaultValue={inputs.title} name="title" onChange={handleChange} type="text" id="title" className="form-control" required />
                                            </div>

                                            <div className="form-group">
                                                <label forhtml="title">Slug (Unique):</label>
                                                <input defaultValue={inputs.slug} name="slug" onChange={handleChange} type="text" id="slug" className="form-control" required />
                                            </div>
                                            

                                            <button type="submit" class="btn btn-primary">Create New Page</button>
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

export default PageAdd