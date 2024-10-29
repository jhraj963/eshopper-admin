import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Notifications() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/contact/`).then(function (response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/contact/${id}`).then(function (response) {
            getDatas();
        });
    }
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                          <h3>Notifications</h3>
                          <p>Manage notifications sent to customers and system alerts.</p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                      <table className="table table-bordered mb-0 text-center">
                                          <thead>
                                              <tr>
                                                  <th>Name</th>
                                                  <th>E-mail</th>
                                                  <th>Subject</th>
                                                  <th>Message</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              {data && data.map((d, key) =>  
                                                <tr key={d.id}>
                                                    <td>{d.name}</td>
                                                    <td>{d.email}</td>
                                                    <td>{d.subject}</td>
                                                    <td>{d.message}</td>
                                              </tr>
                                                  )}
                                              {/* More notification rows can go here */}
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

export default Notifications