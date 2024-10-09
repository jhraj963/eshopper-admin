import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Inventory() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/inventory/`).then(function (response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/inventory/${id}`).then(function (response) {
            getDatas();
        });
    }
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Inventory</h3>
                      <p>Monitor and manage the inventory of your products.</p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                  <div className="table-responsive">
                                      <Link to={'/inventory/add'} className='btn btn-success float-end' >Add New</Link>
                                    <table className="table table-bordered mb-0 text-center">
                                        <thead class="table-danger">
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Current Stock</th>
                                                <th>Reorder Level</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.map((d, key) =>
                                                <tr key={d.id}>
                                                    <td>{d.product_name}</td>
                                                    <td>{d.current_stock}</td>
                                                    <td>{d.reorder_level}</td>
                                                    <td>
                                                        <Link to={`/inventory/edit/${d.id}`} className='btn btn-info' >Edit</Link>
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

export default Inventory