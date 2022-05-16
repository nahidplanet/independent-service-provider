import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import facebook from '../../../images/icons/facebook.svg';
import github from '../../../images/icons/github.svg';
import google from '../../../images/icons/google.svg';
import Loader from '../../Shared/Loader/Loader'

const SocialLogin = () => {

    const navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth, { sendEmailVerification: true });
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    const [signInWithFacebook, userFB, loadingFB, errorFB] = useSignInWithFacebook(auth);
    let socialSinginError;

    if (userG || userGit || userFB) {
        navigate(from, { replace: true });
    }
    if (loadingG || loadingGit || loadingFB) {
        return <Loader></Loader>
    }
    if (errorG || errorGit || errorFB) {
        socialSinginError = <p className='text-red-600 text-lg font-bold'> {errorG?.message} {errorFB?.message} {errorGit?.message} </p>
    }
    return (
        <div data-aos="fade-right" className='flex justify-center w-full'>
            <div className='w-full'>
                <div className='flex justify-center items-center'>
                    <div className='w-4/12 h-[1px] bg-slate-700'></div>
                    <p className='text-center text-lg mx-5'>or</p>
                    <div className='w-4/12 h-[1px] bg-slate-700'></div>
                </div>
                {socialSinginError}
                <h1 className='text-center font-bold text-xl mb-3'>Login With Social</h1>
                <div>
                </div>
                <div className='flex-col'>
                    <div onClick={() => signInWithGoogle()} className='flex justify-center items-center w-full border-2 rounded-md px-5 py-2 cursor-pointer'>
                        <img className='mr-2 w-8 h-8 cursor-pointer' src={google} alt="google" />
                        <h1 className='text-xl font-bold uppercase'>google</h1>
                    </div>
                    <div onClick={() => signInWithFacebook()} className='flex justify-center items-center my-2 w-full border-2 rounded-md px-5 py-2 cursor-pointer'>
                        <img className='mr-2 w-8 h-8 cursor-pointer' src={facebook} alt="facebook" />
                        <h1 className='text-xl font-bold uppercase'>facebook</h1>
                    </div>
                    <div onClick={() => signInWithGithub()} className='flex justify-center items-center w-full border-2 rounded-md px-5 py-2 cursor-pointer'>
                        <img className='mr-2 w-8 h-8 cursor-pointer' src={github} alt="github" />
                        <h1 className='text-xl font-bold uppercase'>github</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;