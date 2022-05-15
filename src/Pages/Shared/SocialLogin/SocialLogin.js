import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import facebook from '../../../images/icons/facebook.svg';
import github from '../../../images/icons/github.svg';
import google from '../../../images/icons/google.svg';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    if (userG || userGit) {
        navigate('/home');
    }
    return (
        <div className='flex justify-center w-full'>
            <div className='w-full'>
                <div className='flex justify-center items-center'>
                    <div className='w-4/12 h-[1px] bg-slate-700'></div>
                    <p className='text-center text-lg mx-5'>or</p>
                    <div className='w-4/12 h-[1px] bg-slate-700'></div>
                </div>
                <h1 className='text-center font-bold text-xl mb-3'>Login With Social</h1>
                <div className='flex-col'>
                    <div onClick={()=>signInWithGoogle()} className='flex justify-center items-center w-full border-2 rounded-md px-5 py-2 cursor-pointer'>
                        <img className='mr-2 w-8 h-8 cursor-pointer' src={google} alt="google" />
                        <h1 className='text-xl font-bold uppercase'>google</h1>
                    </div>
                    <div className='flex justify-center items-center my-2 w-full border-2 rounded-md px-5 py-2 cursor-pointer'>
                        <img className='mr-2 w-8 h-8 cursor-pointer' src={facebook} alt="facebook" />
                        <h1 className='text-xl font-bold uppercase'>facebook</h1>
                    </div>
                    <div onClick={()=>signInWithGithub()} className='flex justify-center items-center w-full border-2 rounded-md px-5 py-2 cursor-pointer'>
                        <img className='mr-2 w-8 h-8 cursor-pointer' src={github} alt="github" />
                        <h1 className='text-xl font-bold uppercase'>github</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;