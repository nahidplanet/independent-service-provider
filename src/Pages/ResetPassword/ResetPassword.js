import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Shared/Loader/Loader';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'

const ResetPassword = () => {
    const emailRef = useRef('');
    const navigate = useNavigate();
    let emailSinginError;
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        sendPasswordResetEmail(email);
        toast("Password Reset. Check Your Email")
    }
    if (sending) {
        <Loader></Loader>
    }
    if (error) {
        emailSinginError = <p className='text-red-600 text-lg font-bold'>{error?.message}</p>
    }
    return (
        <div>
            <div className='flex justify-center items-center h-[100vh]'>
                <div className=" w-[320px] sm:w-6/12 md:w-5/12 lg:w-4/12">
                    <h1 className='text-center font-bold text-2xl md:text-4xl'>Login</h1>

                    <form onSubmit={handleResetPassword} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input ref={emailRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Rest Password
                            </button>
                        </div>
                        <p className='font-bold text-gray-700 text-sm mt-2'><span onClick={() => navigate('/login')} className='text-[#cca001] cursor-pointer'>Go Login Page <ArrowNarrowRightIcon className='text-sm  w-6 h-6  inline'></ArrowNarrowRightIcon></span> </p>
                    </form>
                    {emailSinginError}
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ResetPassword;