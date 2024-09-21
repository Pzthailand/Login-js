import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { _Profile, _ProfileUpdate } from '../../../Functions/Auth';
import '../../../Style/Auth/Profile/Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const selectUser = (state) => state.user;
    const user = useSelector(selectUser);
    const id = user.id;
    const authtoken = user.token;
    const navigate = useNavigate();

    const [fileOld, setFileOld] = useState('');
    const [form, setForm] = useState({
        fname: '',
        lname: '',
        addres: '',
        zipcode: '',
        file: null,
    });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const res = await _Profile(id, authtoken);
                setForm({
                    fname: res.data.fname,
                    lname: res.data.lname,
                    email: res.data.email,
                    addres: res.data.addres,
                    zipcode: res.data.zipcode,
                    file: null,
                });
                setFileOld(res.data.file);
            } catch (err) {
                console.error(err);
                setErrorMessage('Failed to load profile data.');
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, [id, authtoken]);

    const onChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file' && files[0]) {
            const file = files[0];
            if (!['image/jpeg', 'image/png'].includes(file.type)) {
                setErrorMessage('Only JPEG and PNG files are allowed.');
                return;
            }
            if (file.size > 2 * 1024 * 1024) {
                setErrorMessage('File size should not exceed 2MB.');
                return;
            }
        }
        setForm((prevForm) => ({
            ...prevForm,
            [name]: name === 'file' ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formWithImageData = new FormData();
        for (const key in form) {
            if (form[key]) {
                formWithImageData.append(key, form[key]);
            }
        }
        if (fileOld) {
            formWithImageData.append('fileold', fileOld);
        }

        setLoading(true);
        setErrorMessage('');
        setSuccessMessage('');

        try {
            await _ProfileUpdate(user.id, authtoken, formWithImageData);
            setSuccessMessage('Profile updated successfully!');
            navigate('/Profile'); // Navigate after successful update
        } catch (err) {
            setErrorMessage(err.response?.data || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="Profile-Container">
            {/*<div className='Profile-Title'>Profile</div>*/}
            <div className="Profile-Form">
                <div>
                    <form onSubmit={handleSubmit} encType='multipart/form-data'>
                        <div>
                            {fileOld && (
                                <img
                                    src={`http://127.0.0.1:8081/api/UserImages/${fileOld}`}
                                    alt="Current Profile"
                                    className='Profileimages'
                                />
                            )}
                        </div>
                        <div>
                            <label htmlFor="file">New Image:</label>
                            <input type="file" id="file" name="file" onChange={onChange} />
                        </div>
                        <div>
                            <label htmlFor="fname">First Name:</label>
                            <input type="text" id="fname" name="fname" placeholder="First Name" value={form.fname} onChange={onChange} />
                        </div>
                        <div>
                            <label htmlFor="lname">Last Name:</label>
                            <input type="text" id="lname" name="lname" placeholder="Last Name" value={form.lname} onChange={onChange} />
                        </div>
                        <div>
                            <label htmlFor="addres">Address:</label>
                            <textarea
                                style={{ height: 100, width: '100%' }}
                                id="addres"
                                name="addres"
                                placeholder="Address"
                                value={form.addres}
                                onChange={onChange}
                                maxLength={250}
                            />
                        </div>
                        <div>
                            <label htmlFor="zipcode">Zip Code:</label>
                            <input type="text" id="zipcode" name="zipcode" placeholder="Zip code" value={form.zipcode} onChange={onChange} />
                        </div>
                        
                        <div>
                            <button  className='Profile-button' type="submit" disabled={loading}>Change</button>
                        </div>

                        {loading && <p>Loading...</p>}
                        {errorMessage && <p className="error">{errorMessage}</p>}
                        {successMessage && <p className="success">{successMessage}</p>}
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;