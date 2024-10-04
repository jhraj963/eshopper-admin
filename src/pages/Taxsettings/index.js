import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Taxsettings() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Tax Settings</h3>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                         <form>
                                            <label forhtml="tax-rate">Default Tax Rate (%):</label>
                                            <input type="number" id="tax-rate" required /> <br/><br/>

                                            <label forhtml="tax-region">Tax Region:</label>
                                            <input type="text" id="tax-region" required /> <br/><br/>

                                            <button type="submit" class="btn btn-secondary">Save Tax Settings</button>
                                        </form>
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

export default Taxsettings