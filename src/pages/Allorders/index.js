import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Allorders() {
  const [data, setData] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/allorder/`).then(function (response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/allorder/${id}`).then(function (response) {
            getDatas();
        });
    }
  return (
    <AdminLayout>
      <>


        <div class="col-lg-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <h2>All Orders</h2>
              <Link to={'/allorder/add'} className='btn btn-success float-end' >Add New Order</Link>
              <table className="table table-bordered mb-0 text-center table-info">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer Name</th>
                    <th>Date</th>
                    <th>Total Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {data && data.map((d, key) =>
                        <tr key={d.id}>
                            <td>{d.order_id}</td>
                            <td>{d.customer_name}</td>
                            <td>{d.order_date}</td>
                            <td>{d.total_amount}</td>
                            <td>{d.status}</td>
                            <td>
                                <Link to={`/allorder/edit/${d.id}`} className='btn btn-info' >Edit</Link>
                                <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
              </table>
            </div>
          </div>





        



        </div>



      </>







    </AdminLayout>
  )
}

export default Allorders