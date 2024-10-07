import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function BlogAdd() {
    const [inputs, setInputs] = useState({ id: '', title: '', author: '', date: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/blog/${id}`).then(function (response) {
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
                apiurl = `/blog/edit/${inputs.id}`;
            } else {
                apiurl = `/blog/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/blog')
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
                        <Link to={'/blog'} className='btn btn-primary float-left' >Back to List</Link>
                    </div>
                    <div className="row" id="table-bordered">
                        <div className="col-12">
                            <div className="card">

                                <div className="card-content">
                                    <div className="table-responsive">
                                        <div className="card-content">
                                            <form className="form form-vertical" onSubmit={handleSubmit}>

                                            <div className="form-group">
                                                <label forhtml="title">Post Title:</label>
                                                <input defaultValue={inputs.title} name="title" onChange={handleChange} type="text" id="title" className="form-control" required />
                                            </div>
                                            
                                            <div className="form-group">
                                                <label forhtml="blog-author">Author:</label>
                                                <input defaultValue={inputs.author} name="author" onChange={handleChange} type="text" id="author" className="form-control" required />
                                            </div>
                                            
                                            <div className="form-group">
                                                <label forhtml="blog-date">Date:</label>
                                                <input defaultValue={inputs.date} name="date" onChange={handleChange} type="date" id="date" className="form-control" required />
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

export default BlogAdd