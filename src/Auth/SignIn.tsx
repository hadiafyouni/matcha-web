import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from '../components/PrimaryButton';

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
        <div className="min-h-[calc(100vh-var(--header-height))] flex justify-center items-center px-5 py-10 bg-[linear-gradient(135deg,#f0fdf4_0%,#fcfcfc_50%,#f0fdf4_100%)]">
            <div className="w-full max-w-[440px] bg-white rounded-[20px] p-8 md:p-[50px_40px] border border-slate-200 shadow-[0_15px_40px_rgba(44,76,59,0.08)]">

                {/* Header */}
                <div className="text-center mb-[35px]">
                    <h1 className="text-[1.6rem] md:text-2xl font-bold text-[#1a4d2e] m-0 mb-2">Welcome Back</h1>
                    <p className="text-base text-slate-600 m-0">Sign in to your Matcha Horikku account</p>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
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
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(prev => !prev)} edge="end">
                                            <FontAwesomeIcon
                                                icon={showPassword ? faEyeSlash : faEye}
                                                className="text-sm text-slate-600"
                                            />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }
                        }}
                    />

                    <a href="#" className="text-right text-[0.85rem] text-[#2c4c3b] no-underline -mt-2.5 transition-colors duration-200 hover:text-[#1a3a24] hover:underline">
                        Forgot password?
                    </a>

                    <PrimaryButton
                        type="submit"
                        sx={{
                            backgroundColor: '#2c4c3b',
                            color: 'white',
                            borderColor: '#2c4c3b',
                            padding: '12px',
                            fontSize: '1.05rem',
                            textTransform: 'none',
                            borderRadius: '12px',
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

                {/* Divider */}
                <div className="flex items-center my-6 before:content-[''] before:flex-1 before:h-[1px] before:bg-slate-200 after:content-[''] after:flex-1 after:h-[1px] after:bg-slate-200">
                    <span className="px-[15px] text-[#a0aec0] text-[0.85rem]">or</span>
                </div>

                {/* Sign up prompt */}
                <p className="text-center text-slate-600 text-[0.95rem] mb-6">
                    Don't have an account? <Link to="/signin" className="text-[#2c4c3b] font-semibold no-underline transition-colors duration-200 hover:text-[#1a3a24] hover:underline">Sign up</Link>
                </p>

                {/* Go Back */}
                <button
                    className="block mx-auto bg-transparent border-none text-[#a0aec0] text-[0.9rem] cursor-pointer py-2 px-5 rounded-[20px] transition-all duration-300 ease-in-out hover:text-[#2c4c3b] hover:bg-[#2c4c3b0d]"
                    onClick={() => navigate(-1)}
                >
                    ← Go Back
                </button>

            </div>
        </div>
    );
}