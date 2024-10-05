import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Createbackup() {
  return (
    <AdminLayout>
      <>


        <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Create Backup</h3>
                           <p>
                                Click the button below to create a backup of your store data. Ensure you have sufficient storage.
                            </p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <button class="btn btn-success" onclick="createBackup()">Create Backup</button>
                        </div>
                    </div>
                </div>
            </div>



      </>







    </AdminLayout>
  )
}

export default Createbackup