import React from 'react';
import facebook from '../../images/icons/facebook.png';
import twitter from '../../images/icons/twitter.png';
import github from '../../images/icons/github.png';
import youtube from '../../images/icons/youtube.png';
import instagram from '../../images/icons/instagram.png';

const About = () => {
    return (
        <section className='flex'>
            <div className="banner-container mx-auto">
                <div className="banner-row sm:flex mx-auto mt-20">
                    <div className="banner-right w-10/12 sm:w-5/12 flex justify-center mx-auto sm:order-2 order-1 lg:order-2 md:order-2 ">
                        <div className="block mx-auto">
                            <img className='sm:w-4/5  w-full' src="https://i.ibb.co/GVKV0jM/profile.png" alt="banner1" />
                        </div>
                    </div>

                    <div className="banner-left mx-auto sm:px-6 md:px-24 text-left sm:w-7/12 w-10/12 order-1 sm:order-1 md:order-1 lg:order-1  ">
                        <div className="content w-10/12 mx-auto">
                            <div className="font-bold text-yellow-400 text-md sm:text-md md:text-lg text-center sm:text-left">Hi.! <span className='text-[#f5d4b7]'>I'm Nahid Hasan And</span> </div>
                            <div className="title font-bold capitalize text-2xl sm:text-3xl md:text-5xl leading-8 sm:leading-[40px] md:leading-[60px] mt-4 text-[#18243F] text-center sm:text-left">Trying To Be A Full Stack MERN Developer</div>
                            <div className="desc my-4 font-lite text-gray-500 text-center sm:text-left">One of my life's dreams is to become a skilled MERN developer. I want to work as a developer of a reputed organization for the next 6 months. This is my goal, this is my purpose. And one day I will win my dream InshaAllah.
                                And in the future I want to be Jhangkar Mahbub</div>
                        </div>
                        <div className="buttons flex justify-center sm:justify-start sm:pl-6 md:px-12">
                            <div className='flex mt-3 sm:mt-0'>
                                <ul><li className='text-sm font-semibold border rounded-full mr-2 w-6 h-6'><a target="_blank" href="https://facebook.com"> <img src={facebook} alt="fb" /></a></li></ul>
                                <ul><li className='text-sm font-semibold border rounded-full mr-2 w-6 h-6'><a target="_blank" href="https://twitter.com"><img src={twitter} alt="fb" /></a></li></ul>
                                <ul><li className='text-sm font-semibold border rounded-full mr-2 w-6 h-6'><a target="_blank" href="https://github.com"><img src={github} alt="fb" /></a></li></ul>
                                <ul><li className='text-sm font-semibold border rounded-full mr-2 w-6 h-6'><a target="_blank" href="https://instagram.com"><img src={instagram} alt="fb" /></a></li></ul>
                                <ul><li className='text-sm font-semibold border rounded-full mr-2 w-6 h-6'><a target="_blank" href="https://youtube.com"><img src={youtube} alt="fb" /></a></li></ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    );
};

export default About;