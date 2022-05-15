import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../../images/icons/facebook.png'
import twitter from '../../../images/icons/twitter.png'
import github from '../../../images/icons/github.png'
import youtube from '../../../images/icons/youtube.png'
import instagram from '../../../images/icons/instagram.png'

const Footer = () => {
    const sal = new Date()
    const newsal = sal.getFullYear();
    return (
        <footer className=' bg-[#1F2937] lg:px-24 md:px-12 sm:px-6 lg:mt-36 md:mt-24 sm:12 sm:py-10 md:py-16 lg:py-20 px-4 py-5 mt-12'>
            <div className="footer-top static mx-auto text-white flex justify-center flex-wrap">
                <div className='destination lg:w-3/12  w-6/12 mb-4 '>
                    <h3 className='font-bold text-white text-lg mb-2 '>Top destination</h3>
                    <ul><Link to={'/home'}><li className='text-sm font-semibold'>Maldives, Malé</li></Link></ul>
                    <ul><Link to={'/home'}><li className='text-sm font-semibold'>Australia, Canberra</li></Link></ul>
                    <ul><Link to={'/home'}><li className='text-sm font-semibold'>Thailand, Bangkok</li></Link></ul>
                    <ul><Link to={'/home'}><li className='text-sm font-semibold'>Morocco, Rabat</li></Link></ul>
                    <ul><Link to={'/home'}><li className='text-sm font-semibold'>Australia, Canberra</li></Link></ul>
                </div>
                <div className='Cctegories lg:w-2/12 w-6/12 mb-4'>
                    <h3 className='font-bold text-white text-lg mb-2'>Categories</h3>
                    <ul><Link to={'/home'}><li className='text-sm font-semibold'>Travel</li></Link></ul>
                    <ul><Link to={'/home'}><li className='text-sm font-semibold'>Lifestyle</li></Link></ul>
                    <ul><Link to={'/home'}><li className='text-sm font-semibold'>Fashion</li></Link></ul>
                    <ul><Link to={'/home'}><li className='text-sm font-semibold'>Education</li></Link></ul>
                    <ul><Link to={'/home'}><li className='text-sm font-semibold'>Food & Drink</li></Link></ul>
                </div>
                <div className='quick-links lg:w-2/12 w-6/12 mb-4'>
                    <h3 className='font-bold text-white text-lg mb-2'>Quick links</h3>
                    <ul><li className='text-sm font-semibold'><Link to={'/home'}>home</Link></li></ul>
                    <ul><li className='text-sm font-semibold'><Link to={'/about'}>about</Link></li></ul>
                    <ul><li className='text-sm font-semibold'><Link to={'/blog'}>blog</Link></li></ul>
                    <ul><li className='text-sm font-semibold'><Link to={'/services'}>service</Link></li></ul>
                    <ul><li className='text-sm font-semibold'><Link to={'/login'}>login</Link></li></ul>
                </div>
                <div className='newsletter lg:w-5/12 w-6/12 mb-4'>
                    <h3 className='font-bold text-white text-lg mb-2'>Get a newsletter</h3>
                    <p>For the latest deals and tips, travel no further than your inbox</p>
                    <div className='sm:flex mt-2'>
                        <input className='w-full border rounded-[5px,0,0,5px] text-yellow-900' type="email" name="email" id="email" />
                        <input className='border px-2 py-1 w-full sm:w-auto cursor-pointer' type="submit" value="Subscribe" />
                    </div>
                </div>
            </div>

            <div className="footer-top static mx-auto text-white flex justify-center flex-wrap mt-10">
                <div className='destination lg:w-3/12  w-4/12 mb-4 '>
                    <img src="https://i.ibb.co/6H8HnYH/10028.png" alt="log" />
                </div>
                <div className='w-[2px] h-20 bg-slate-500 mx-5'>
                </div>
                <div className='quick-links lg:w-2/12 w-4/12 mb-4'>
                    <p>&copy; {newsal} All Right Reserved by theme_crazy</p>
                </div>
                <div className='flex mt-3 sm:mt-0'>
                    <ul><li className='text-sm font-semibold border rounded-full mr-2 w-6 h-6'><a target="_blank" href="https://facebook.com"> <img src={facebook} alt="fb"/></a></li></ul>
                    <ul><li className='text-sm font-semibold border rounded-full mr-2 w-6 h-6'><a target="_blank" href="https://twitter.com"><img src={twitter} alt="fb"/></a></li></ul>
                    <ul><li className='text-sm font-semibold border rounded-full mr-2 w-6 h-6'><a target="_blank" href="https://github.com"><img src={github} alt="fb"/></a></li></ul>
                    <ul><li className='text-sm font-semibold border rounded-full mr-2 w-6 h-6'><a target="_blank" href="https://instagram.com"><img src={instagram} alt="fb"/></a></li></ul>
                    <ul><li className='text-sm font-semibold border rounded-full mr-2 w-6 h-6'><a target="_blank" href="https://youtube.com"><img src={youtube} alt="fb"/></a></li></ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;