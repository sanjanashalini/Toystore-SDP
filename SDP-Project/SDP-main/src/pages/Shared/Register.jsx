import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUp } from '../../services/api';
import { toast, Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons for password visibility toggle
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const navigate = useNavigate();
    const [registerdata, setRegisterdata] = useState({
        name: '',
        phone: '',
        address: '',
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setRegisterdata({ ...registerdata, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await SignUp(registerdata.name, registerdata.email, registerdata.phone, registerdata.address, registerdata.password);

        if (res.data === "User registered successfully.") {
            toast.success("Signup Success");
            setTimeout(() => {
                navigate('/login');
            }, 5000);
        } else {
            toast.error(res.data);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className='p-0 m-0 h-[100vh] w-screen flex justify-center items-center bg-gray-100'>
                <div className='flex flex-col w-[30%] max-w-lg bg-white shadow-lg rounded-lg overflow-hidden'>
                    <div className=''>
                        <div className='p-3 bg-gradient-to-b from-red-500 to-red-300 text-white text-center'>
                        <h2 className='text-2xl font-bold mb-4 text-center '>Create an Account</h2></div>
                        
                        <form className='flex flex-col  p-3 gap-2' onSubmit={handleSubmit}>
                            <div className='pb-2'></div>
                            <input
                                type="text"
                                id="name"
                                placeholder='Name'
                                className='bg-gray-100 outline-none  border-2 border-gray-300 focus:border-red-300 rounded-full w-full text-black placeholder:text-black p-3 shadow-sm'
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                id="phone"
                                placeholder='Phone'
                                className='bg-gray-100 outline-none border-2 border-gray-300 focus:border-red-300 rounded-full w-full text-black placeholder:text-black p-3 shadow-sm'
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                id="address"
                                placeholder='Address'
                                className='bg-gray-100 outline-none border-2 border-gray-300 focus:border-red-300 rounded-full w-full text-black placeholder:text-black p-3 shadow-sm'
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                id="email"
                                placeholder='Email'
                                className='bg-gray-100 outline-none border-2 border-gray-300 focus:border-red-300 rounded-full w-full text-black placeholder:text-black p-3 shadow-sm'
                                onChange={handleChange}
                                required
                            />
                            <div className='relative w-full'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder='Password'
                                    className='bg-gray-100 outline-none border-2 border-gray-300 focus:border-red-300 rounded-full w-full text-black placeholder:text-black p-3 shadow-sm'
                                    onChange={handleChange}
                                    required
                                />
                                <span
                                    className='absolute top-3 right-4 cursor-pointer text-black'
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
                                </span>
                            </div>
                            <button type="submit" className='w-full bg-red-500 text-white p-3 rounded-full font-bold shadow-md hover:bg-red-600 transition duration-300'>Register</button>
                            <p className='text-center mt-4 text-sm'>Already have an account? <span className='text-red-600 cursor-pointer font-bold' onClick={() => navigate('/login')}>Login!</span></p>
                        </form>
                    </div>

                    {/* Sign in with Google Section */}
                    <div className='p-3 bg-gradient-to-b from-red-500 to-red-300 text-white text-center'>
                       
                        <button
                            onClick={() => console.log('Sign up with Google')} // Replace with actual Google sign-in logic
                            className='w-full  bg-white text-gray-600 p-3 rounded-full font-bold flex items-center justify-center gap-1 shadow-md hover:bg-gray-200 transition duration-300'
                        >   
                            <FcGoogle size={24} />
                            Sign up with Google
                        </button>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    );
};

export default Register;
