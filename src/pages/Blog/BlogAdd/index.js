import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function BlogAdd() {
    const [inputs, setInputs] = useState({ id: '', title: '', author: '', date: '', overview: '', photo:'' });
    const [photo, setPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getDatas();
        }
    }, [id]);

    const getDatas = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/blog/${id}`);
            setInputs(response.data.data);
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        setPhoto(file);
        setPhotoPreview(file ? URL.createObjectURL(file) : null); // Set preview for the uploaded photo
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', inputs.title);
            formData.append('author', inputs.author);
            formData.append('date', inputs.date);
            formData.append('overview', inputs.overview);
            if (photo) {
                formData.append('photo', photo);
            }

            const apiurl = inputs.id ? `/blog/edit/${inputs.id}` : `/blog/create`;

            await axios.post(`${process.env.REACT_APP_API_URL}${apiurl}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            navigate('/blog');
        } catch (error) {
            console.error('Error submitting blog:', error);
        }
    };

    return (
        <AdminLayout>
            <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <h3>{inputs.id ? 'Edit Blog' : 'Add New Blog'}</h3>
                    </div>
                </div>
                <div className="card-header">
                    <Link to="/blog" className="btn btn-primary float-left">
                        Back to List
                    </Link>
                </div>
                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-content">
                                <form className="form form-vertical" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="title">Post Title:</label>
                                        <input
                                            value={inputs.title}
                                            name="title"
                                            onChange={handleChange}
                                            type="text"
                                            id="title"
                                            className="form-control"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="author">Author:</label>
                                        <input
                                            value={inputs.author}
                                            name="author"
                                            onChange={handleChange}
                                            type="text"
                                            id="author"
                                            className="form-control"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="date">Date:</label>
                                        <input
                                            value={inputs.date}
                                            name="date"
                                            onChange={handleChange}
                                            type="date"
                                            id="date"
                                            className="form-control"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="overview">Overview:</label>
                                        <textarea
                                            value={inputs.overview}
                                            name="overview"
                                            onChange={handleChange}
                                            id="overview"
                                            className="form-control"
                                            rows="4"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="photo">Photo:</label>
                                        <input
                                            onChange={handlePhotoChange}
                                            type="file"
                                            id="photo"
                                            className="form-control"
                                            accept="image/*"
                                        />
                                        {photoPreview && (
                                            <div className="mt-3">
                                                <img
                                                    src={photoPreview}
                                                    alt="Photo Preview"
                                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <button type="submit" className="btn btn-primary">
                                        {inputs.id ? 'Update Blog Post' : 'Create Blog Post'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default BlogAdd;
