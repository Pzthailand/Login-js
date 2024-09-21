import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { _SignIn } from "../../Functions/Auth";
import { useDispatch } from "react-redux";
import '../../Style/Auth/SignIn.css';

function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, SetFormData] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const { username, password } = formData;
    
    const onChange = (e) => {
        SetFormData({ ...formData, [e.target.name]: e.target.value });
        setError(null); // Clear error on input change
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        if (username === '' || password === '') {
            setError('Please insert data...');
            setLoading(false);
            return;
        }

        const value = { username, password };
        _SignIn(value)
            .then(response => {
                setLoading(false);
                dispatch({
                    type: 'LOGGED_IN_USERS',
                    Payload: {
                        id: response.data.payload.user.id,
                        username: response.data.payload.user.username,
                        token: response.data.token,
                        role: response.data.payload.user.role,
                        email: response.data.payload.user.email,
                        phone: response.data.payload.user.phone
                    }
                });
                localStorage.setItem('token', response.data.token);
                roleBaseRedirect(response.data.payload.user.role);
            })
            .catch(err => {
                setLoading(false);
                setError(err.response.data);
                console.error(err);
            });
    };

    const roleBaseRedirect = (role) => {
        if (role === 'admin') {
            navigate('/Adminitratordashboard');
        } else {
            navigate('/UserPage');
        }   
    };

    return (
        <div>
            <div>
                <div>
                    <form onSubmit={onSubmit}>
                        <div className="signin-container">
                            <div>
                                <label style={{color:'#007bff'}}>SIGN IN WITH USERNAME</label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    maxLength={16}
                                    autoFocus
                                    onChange={onChange}
                                    aria-label="Username"
                                />
                            </div>
                            <div>
                                <label>PASSWORD</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={onChange}
                                    aria-label="Password"
                                />
                            </div>
                            

                            <div>
                                <button disabled={loading}>Sign in</button>
                            </div>

                            {error && <div className="error-message">{error}</div>}

                            <div>
                                <Link to="/ForgotPassword">Forgot Password</Link>
                            </div>
                            <div>
                                <Link to="/SignUpEmail">Sign Up</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;