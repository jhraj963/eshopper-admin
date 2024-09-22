import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'


function Addproduct() {
    return (
        <AdminLayout>

            <>


                <div className="content-wrapper" >

                    <div className="row">

                        <div className="col-md-12 grid-margin">

                            <div className="card-body col-md-12">
                                {/* <div>
                                    <i className="mdi mdi-access-point"></i> mdi mdi-access-point mdi mdi-access-pointmdi mdi-acce mdi mdi-access-point mdi mdi-access-pointmdi mdi-accemdi mdi-access-point mdi mdi-access-pointmdi mdi-acce
                                </div> */}
                                <form>
                                    <div className="form-group">
                                        <label>Product Name *</label>
                                        <input type="text" className="form-control" placeholder="Enter product name" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Product Description *</label>
                                        <textarea className="form-control" placeholder="Enter product description" rows="12" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Price *</label>
                                        <input type="number" className="form-control" placeholder="Enter price" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Quantity *</label>
                                        <input type="number" className="form-control" placeholder="Enter quantity" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Category *</label>
                                        <select className="form-control" required>
                                            <option value="">-- Select Category --</option>
                                            <option value="clothing">Clothing</option>
                                            <option value="accessories">Accessories</option>
                                            <option value="electronics">Electronics</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Product Image *</label>
                                        <input type="file" className="form-control" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Add Product</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>











            </>
        </AdminLayout>

    )
}

export default Addproduct