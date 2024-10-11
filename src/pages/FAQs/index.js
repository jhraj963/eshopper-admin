import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function FAQs() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/faq/`).then(function (response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/faq/${id}`).then(function (response) {
            getDatas();
        });
    }
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>FAQs</h3>
                        <p>Manage frequently asked questions for your customers.</p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                    <Link to={'/faq/add'} className='btn btn-success float-end' >Add New FAQs</Link>
                                        <table className="table table-bordered mb-0 text-center">
                                            <thead>
                                                <tr>
                                                    <th>Question</th>
                                                    <th>Answer</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {data && data.map((d, key) =>
                                                <tr key={d.id}>
                                                    <td>{d.question}</td>
                                                    <td>{d.answer}</td>
                                                    <td>
                                                        <Link to={`/faq/edit/${d.id}`} className='btn btn-info' >Edit</Link>
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



      </>







    </AdminLayout>
  )
}

export default FAQs