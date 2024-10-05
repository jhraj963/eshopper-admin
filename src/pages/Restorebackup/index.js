import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Restorebackup() {
  return (
    <AdminLayout>
      <>


         <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>Restore Backup</h3>
                         <p>
                        Select a backup file from your device to restore your store data.
                        </p>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">
                                    <form>
                                        <div className="form-group">
                                            <label for="backupFile">Choose Backup File</label>
                                            <input type="file" id="backupFile" className="form-control" required/>
                                        </div>
                                        <button type="submit" className="btn btn-warning">Restore Backup</button>
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

export default Restorebackup