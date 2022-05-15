import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";


const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let emailSinginError;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (error) {
        emailSinginError = <p className='text-red-600 text-lg font-bold'>{error?.message}</p>
    }
    let from = location.state?.from?.pathname || "/";

    const handleSingin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
    }
    if (user) {
        console.log(user);
        navigate(from, { replace: true });
    }
    if (loading) {
        
    }
    return (
        <div>
            <div className='flex justify-center items-center h-[100vh]'>
                <div className=" w-[320px] sm:w-6/12 md:w-5/12 lg:w-4/12">
                    <h1 className='text-center font-bold text-2xl md:text-4xl'>Login</h1>

                    <form onSubmit={handleSingin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input ref={emailRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input ref={passwordRef} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                            <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign In
                            </button>
                            <Link to={''} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </Link>
                        </div>
                        <p className='font-bold text-gray-700 text-sm mt-2'>New to Tourest ? <span onClick={() => navigate('/ragistration')} className='text-[#cca001] cursor-pointer'>Register</span> </p>
                    </form>
                    {emailSinginError}
                    <SocialLogin></SocialLogin>
                </div>
                
            </div>
            {loading ? <ClipLoader color={'#EB1935'} loading={loading} size={150} />:" "}
        </div>
    );
};

export default Login;