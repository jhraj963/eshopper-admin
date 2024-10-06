import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function EventAdd() {
   const [inputs, setInputs] = useState({ id: '', eventname: '', startdate: '', enddate: '', discount: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/salesevent/${id}`).then(function (response) {
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
                apiurl = `/salesevent/edit/${inputs.id}`;
            } else {
                apiurl = `/salesevent/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/salesevent')
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
                        <h3>Sales Events</h3>
                        <p>Manage and create sales events to attract customers.</p>
                    </div>
                </div>
                <div className="card-header">
                                <Link to={'/AddNewEvent/add'} className='btn btn-primary float-left' >Add New</Link>
                            </div>
                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            
                            <div className="card-content">
                                <div className="table-responsive">

                                  
                                        <form className="form form-vertical" onSubmit={handleSubmit}>
                                        <h4>Add New Sales Event</h4>
                                        <label forhtml="event-name">Event Name:</label>
                                        <input defaultValue={inputs.eventname} name="eventname" onChange={handleChange} type="text" id="eventname" required />

                                        <label forhtml="event-start">Start Date:</label>
                                        <input defaultValue={inputs.startdate} name="startdate" onChange={handleChange} type="date" id="startdate" required />

                                        <label forhtml="event-end">End Date:</label>
                                        <input defaultValue={inputs.enddate} name="enddate" onChange={handleChange} type="date" id="enddate" required />

                                        <label forhtml="event-discount">Discount:</label>
                                        <input defaultValue={inputs.discount} name="discount" onChange={handleChange} type="number" id="discount" required />

                                        <button type="submit" class="btn btn-primary">Create Sales Event</button>
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

export default EventAdd