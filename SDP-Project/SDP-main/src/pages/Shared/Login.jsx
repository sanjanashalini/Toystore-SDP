import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { authService } from '@/services/auth';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const checkRedirect = async () => {
        if (authService.getToken() !== null && authService.isLoggedIn()) {
            const userRole = authService.getUserRole();
            if (userRole !== null) {
                if (userRole === "Admin") {
                    navigate('/admin/dashboard');
                } else if (userRole === "User") {
                    navigate('/shopbycategory');
                } else {
                    toast.error("Something went wrong");
                }
            }
        }
    };

    useEffect(() => {
        checkRedirect();
    }, []);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await authService.SignIn(emailRef.current.value, passwordRef.current.value);
        if (res.status === 200) {
            authService.setToken(res.data.accessToken);
            toast.success("Welcome");
            console.log(res.data.accessToken);
            console.log(authService.getToken());

            setTimeout(() => {
                checkRedirect();
            }, 3000);
        }
    };

    const handleGoogleLogin = () => {
        // Implement Google login logic here
        toast.success("Google Login clicked");
    };

    return (
        <>
            <div className='p-0 m-0 h-[100vh] w-screen flex justify-center items-center'  >
                <div className='flex flex-col w-[400px] bg-white shadow-lg rounded-lg overflow-hidden'>
                    <div className='py-5 px-12 bg-gradient-to-b from-red-500 to-red-300 text-white text-center'>
                        <h2 className='text-3xl font-bold mb-2'>Welcome Back!</h2>
                        <p className='text-sm'>Please sign in to continue</p>
                    </div>
                    <div className='p-8'>
                        <form className='flex flex-col gap-4' onSubmit={handleLogin}>
                            <input 
                                type="email" 
                                ref={emailRef} 
                                placeholder='Email' 
                                className='bg-gray-100 outline-none border-2 border-gray-200 focus:border-red-300 rounded-full w-full text-black placeholder:text-black p-3 shadow-sm' 
                                required 
                            />
                            
                            <div className='relative w-full'>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    ref={passwordRef} 
                                    placeholder='Password' 
                                    className='bg-gray-100 outline-none border-2 border-gray-200 focus:border-red-300 rounded-full w-full text-black placeholder:text-black p-3 shadow-sm' 
                                    required 
                                />
                                <div className='absolute top-3 right-4 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                                </div>
                            </div>
                            
                            <button 
                                type="submit" 
                                className='w-full bg-red-500 text-white p-3 rounded-full font-bold shadow-md hover:bg-red-500 transition duration-300'
                            >
                                Login
                            </button>

                            <p 
                                className='text-center text-sm mt-2 text-red-500 cursor-pointer hover:underline'
                                onClick={() => navigate('/forgot-password')}
                            >
                                Forgot Password?
                            </p>
                        </form>
                        <button 
                            type="button" 
                            onClick={handleGoogleLogin} 
                            className='w-full mt-6 bg-white border-2 border-gray-300 text-gray-600 p-3 rounded-full font-bold flex items-center justify-center gap-2 shadow-md hover:bg-gray-50 transition duration-300'
                        >
                            <FcGoogle size={24} />
                            Login with Google
                        </button>
                    </div>
                    <div className='py-4 bg-gradient-to-b from-red-400 to-red-200 text-center'>
                        <p className='text-black text-sm'>Don't have an account? <span className='text-red-600 cursor-pointer font-bold' onClick={() => navigate('/register')}>Register!</span></p>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    );
};

export default Login;
