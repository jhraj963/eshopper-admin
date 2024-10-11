import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function FaqsAdd() {
    const [inputs, setInputs] = useState({ id: '', question: '', answer: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/faq/${id}`).then(function (response) {
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
                apiurl = `/faq/edit/${inputs.id}`;
            } else {
                apiurl = `/faq/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/FAQs')
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
                            <h3>Add New FAQs</h3>
                            
                        </div>
                    </div>
                    <div className="card-header">
                        <Link to={'/FAQs'} className='btn btn-primary float-left' >Back to FAQs</Link>
                    </div>
                    <div className="row" id="table-bordered">
                        <div className="col-12">
                            <div className="card">

                                <div className="card-content">
                                    <div className="table-responsive">
                                        <div className="card-content">
                                            <form className="form form-vertical" onSubmit={handleSubmit}>

                                            <div className="form-group">
                                                <label forhtml="title">Question:</label>
                                                <input defaultValue={inputs.question} name="question" onChange={handleChange} type="text" id="question" className="form-control" required />
                                            </div>

                                            <div className="form-group">
                                                <label forhtml="title">Answer:</label>
                                                <input defaultValue={inputs.answer} name="answer" onChange={handleChange} type="text" id="answer" className="form-control" required />
                                            </div>


                                            <button type="submit" class="btn btn-primary">Create FAQs</button>
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

export default FaqsAdd