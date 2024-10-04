import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Returns() {
  return (
    <AdminLayout>
      <>


         <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Returns</h3>
                        <p>Manage product returns from customers.</p>
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
                                                <th>Return ID</th>
                                                <th>Order ID</th>
                                                <th>Product Name</th>
                                                <th>Return Date</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           {/* Sample Return Row  */}
                                            <tr>
                                                <td>R001</td>
                                                <td>#12345</td>
                                                <td>Sample Product</td>
                                                <td>2023-01-20</td>
                                                <td>Processed</td>
                                                <td>
                                                    <button class="btn btn-primary">View</button>
                                                    <button class="btn btn-info">Approve</button>
                                                </td>
                                            </tr>
                                             {/* More return rows will go here  */}
                                        </tbody>
                                        <tbody>
                                           {/* Sample Return Row  */}
                                            <tr>
                                                <td>R001</td>
                                                <td>#12345</td>
                                                <td>Sample Product</td>
                                                <td>2023-01-20</td>
                                                <td>Processed</td>
                                                <td>
                                                    <button class="btn btn-primary">View</button>
                                                    <button class="btn btn-info">Approve</button>
                                                </td>
                                            </tr>
                                             {/* More return rows will go here  */}
                                        </tbody>
                                        <tbody>
                                           {/* Sample Return Row  */}
                                            <tr>
                                                <td>R001</td>
                                                <td>#12345</td>
                                                <td>Sample Product</td>
                                                <td>2023-01-20</td>
                                                <td>Processed</td>
                                                <td>
                                                    <button class="btn btn-primary">View</button>
                                                    <button class="btn btn-info">Approve</button>
                                                </td>
                                            </tr>
                                             {/* More return rows will go here  */}
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

export default Returns