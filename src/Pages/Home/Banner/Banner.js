import React from 'react';

const Banner = () => {
    return (
        <section className='flex'>
            <div className="banner-container mx-auto">
                <div className="banner-row sm:flex mx-auto mt-20">
                <div className="banner-right w-10/12 sm:w-5/12 flex justify-center mx-auto sm:order-2 order-1 lg:order-2 md:order-2 ">
                        <div className="block mx-auto">
                            <img className='sm:w-4/5  w-full' src="https://i.ibb.co/2vTczFh/10004.png" alt="banner1" />
                        </div>
                    </div>

                    <div className="banner-left mx-auto sm:px-6 md:px-24 text-left sm:w-7/12 w-10/12 order-1 sm:order-1 md:order-1 lg:order-1  ">
                        <div className="content w-10/12 mx-auto">
                            <div className="moto text-yellow-400 text-md sm:text-md md:text-lg text-center sm:text-left">Explore Your Travel</div>
                            <div className="title font-bold capitalize text-2xl sm:text-3xl md:text-5xl leading-8 sm:leading-[40px] md:leading-[60px] mt-4 text-[#18243F] text-center sm:text-left">Start planning your dream trip today!</div>
                            <div className="desc my-4 font-lite text-gray-500 text-center sm:text-left">I travel not to go anywhere, but to go. I travel for travel's sake the great affair is to move.</div>
                        </div>
                        <div className="buttons flex justify-center sm:justify-start sm:pl-6 md:px-12">
                            <button className='border px-4 py-3 rounded mr-2 bg-[#1F2937] text-white font-semibold hover:bg-[#FDC703]'>Contact us</button>
                            <button className='border px-4 py-3 rounded border-[#cca001] font-semibold hover:font-bold'>Learn More</button>
                        </div>
                    </div>

                    
                </div>
            </div>

        </section>
    );
};

export default Banner;