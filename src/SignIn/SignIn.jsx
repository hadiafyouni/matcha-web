import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from '../components/PrimaryButton';
import './SignIn.css';

export default function SignIn() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    // Matcha-themed MUI TextField styling
    const textFieldSx = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            '& fieldset': { borderColor: '#c2eaba' },
            '&:hover fieldset': { borderColor: '#2c4c3b' },
            '&.Mui-focused fieldset': { borderColor: '#2c4c3b' },
        },
        '& .MuiInputLabel-root.Mui-focused': { color: '#2c4c3b' },
    };

    return (
        <div className="signin-page">
            <div className="signin-card">

                <div className="signin-header">
                    <h1>Welcome Back</h1>
                    <p>Sign in to your Matcha Horikku account</p>
                </div>

                <form className="signin-form" onSubmit={(e) => e.preventDefault()}>
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        required
                        sx={textFieldSx}
                    />

                    <TextField
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        required
                        sx={textFieldSx}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(prev => !prev)} edge="end">
                                        <FontAwesomeIcon
                                            icon={showPassword ? faEyeSlash : faEye}
                                            style={{ fontSize: '0.9rem', color: '#4a5568' }}
                                        />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />

                    <a href="#" className="forgot-link">Forgot password?</a>

                    <PrimaryButton
                        type="submit"
                        sx={{
                            backgroundColor: '#2c4c3b',
                            color: 'white',
                            borderColor: '#2c4c3b',
                            padding: '12px',
                            fontSize: '1.05rem',
                            '&:hover': {
                                backgroundColor: '#1a3a24',
                                borderColor: '#1a3a24',
                                color: 'white',
                            }
                        }}
                    >
                        Sign In
                    </PrimaryButton>
                </form>

                <div className="signin-divider">
                    <span>or</span>
                </div>

                <p className="signup-prompt">
                    Don't have an account? <Link to="/signin" className="signup-link">Sign up</Link>
                </p>

                <button className="go-back-btn" onClick={() => navigate(-1)}>
                    ← Go Back
                </button>

            </div>
        </div>
    );
}
