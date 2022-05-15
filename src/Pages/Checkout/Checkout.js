import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const Checkout = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [checked,setChecked] = useState(false);
    let userName;
    let userEmail;

    if (user) {
        userName = user.displayName;
        userEmail = user.email;
        console.log(user);
    }
    return (
        <div>
            <div className='flex justify-center items-center h-[100vh]'>
                <div className=" w-[320px] sm:w-6/12 md:w-5/12 lg:w-4/12">
                    <h1 className='text-center font-bold text-4xl'>Your Information</h1>

                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input readOnly value={userName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input readOnly value={userEmail} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Amount
                            </label>
                            <input readOnly value={'$720'} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="******************" />

                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                                Confirm Password
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="password" placeholder="******************" />

                        </div>
                        <div className="flex justify-start mb-4">
                            <label className="md:w-2/3 block text-gray-500 font-bold">
                                <input onClick={()=>setChecked(!checked)} className="mr-2 leading-tight" type="checkbox" />
                                <span className="text-sm">
                                    Are You Sure To Payment?
                                </span>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <button disabled={!checked} onClick={() => navigate('/done')} className="disabled:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Confirm
                            </button>
                        </div>
                        <p className='font-bold text-gray-700 text-sm mt-2 text-center'>Already Have a Account? <span className='text-[#cca001] cursor-pointer'>Login</span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;