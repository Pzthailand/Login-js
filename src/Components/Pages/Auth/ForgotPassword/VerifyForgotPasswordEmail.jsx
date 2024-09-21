import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { _ChangePassword } from '../../../Functions/Auth';

const VerifyForgotPasswordEmail = () => {
    const [inputOtp, setInputOtp] = useState('');
    const [timer, setTimer] = useState(300); // 5 minutes in seconds

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    // Redux
    const selectUser = (state) => state.user;
    const user = useSelector(selectUser);
    const otp = user.otp;

    useEffect(() => {
        if (timer === 0) return; // Stop if timer reaches 0
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const resendOtp = useCallback(() => {
        setTimer(300); // Reset timer to 5 minutes
        // Add your logic to send a new OTP
    }, []);

    const verifyOtp = useCallback(() => {
        if (!inputOtp) {
            alert('Please Input OTP');
            return;
        }
        if (inputOtp === otp) {
            dispatch({
                type: 'FORGOT_PASSWORD',
                ForgotPassword: {
                    id: user.id,
                },
            });
            navigate('/ChangePassword');
        } else {
            alert('Invalid OTP');
        }
    }, [inputOtp, otp, user.id, dispatch, navigate]);

    return (
        <div>
            <div>
                <h2 style={{ marginBottom: 25 }}>Verify OTP</h2>
                <input
                    style={{ textAlign: 'center', height: 30, width: 200 }}
                    name='inputOtp'
                    placeholder='0-9'
                    maxLength={6}
                    onChange={(e) => setInputOtp(e.target.value)}
                />
            </div>

            <div>
                <label style={{ float: 'left' }}>
                    Time Remaining:{" "}
                    <span style={{ fontWeight: 600 }}>
                        {Math.floor(timer / 60).toString().padStart(2, '0')}:
                        {(timer % 60).toString().padStart(2, '0')}
                    </span>
                </label>
                <label
                    disabled={timer > 0}
                    style={{
                        float: 'right',
                        color: timer > 0 ? "#85888b" : "#FF5630",
                    }}
                    onClick={resendOtp}
                >
                    Resend OTP
                </label>
            </div>

            <div>
                <button
                    disabled={timer === 0}
                    style={{
                        color: timer > 0 ? "#000000" : "#85888b",
                    }}
                    onClick={verifyOtp}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default VerifyForgotPasswordEmail;