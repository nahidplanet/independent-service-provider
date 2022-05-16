import React from 'react';
import { ArrowNarrowRightIcon, CheckCircleIcon } from '@heroicons/react/solid';
import { useNavigate, useParams } from 'react-router-dom';


const ServiceDetails = () => {
    const { serviceID } = useParams({});
    const navigate = useNavigate();

    return (
        <section className='w-10/12 mx-auto border-2 rounded-md mt-10 lg:px-24'>
            <div className="image h-[300px] mt-0 lg:mt-8">
                <img className='w-full h-full mx-auto border-2 rounded-2xl' src="https://i.ibb.co/2S7p0NG/10020.png" alt="details" />
            </div>
            <h1 className='text-[#1F2937] text-2xl font-bold capitalize text-left p-4'>A Good Traveler Has No Fixed Plans And Is Not Intent On Arriving <span className='text-yellow-600 capitalize font-bold text-2xl'>Your product id iS</span> = <span className='text-red-600'>{serviceID}</span>. </h1>
            <p className='text-md text-left p-3 text-gray-600 text-sm sm:text-md font-light sm:font-normal'>
            Grab this wonderful 4 nights and 5 days customisable and best-selling Hong Kong tour package from India to make your vacation a memorable experience. Your Hong Kong trip itinerary will begin with the marvellous city tour of Hong Kong and later take you to the marine-themed Ocean Park and the dreamy world of With the amazing 4 Nights 5 days Hong Kong Disneyland tour packages, you would be able to experience the magic of Disney and all its cute and enchanting characters. See the many Disney stories come to life and experience the fun and magic.. <br />
            Grab this wonderful 4 nights and 5 days customisable and best-selling Hong Kong tour package from India to make your vacation a memorable experience. Your Hong Kong trip itinerary will begin with the marvellous city tour of Hong Kong and later take you to the marine-themed Ocean Park and the dreamy world of With the amazing 4 Nights 5 days Hong Kong Disneyland tour packages, you would be able to experience the magic of Disney and all its cute and enchanting characters. See the many Disney stories come to life and experience the fun and magic.. <br />
            Grab this wonderful 4 nights and 5 days customisable and best-selling Hong Kong tour package from India to make your vacation a memorable experience. Your Hong Kong trip itinerary will begin with the marvellous city tour of Hong Kong and later take you to the marine-themed Ocean Park and the dreamy world of With the amazing 4 Nights 5 days Hong Kong Disneyland tour packages, you would be able to experience the magic of Disney and all its cute and enchanting characters. See the many Disney stories come to life and experience the fun and magic..
            </p>
            <div className='flex justify-evenly'>
                <div data-aos="fade-left" className='advantage  border-2 rounded-2xl lg:py-6 lg:px-10 w-5/12 '>
                    <h1 className=' text-center text-[#1F2937] text-lg my-3 lg:text-2xl font-bold capitalize'>advantage</h1>
                    <ul className='py-2 text-left'><li><span className='ml-2 text-gray-600 text-sm sm:text-md font-light sm:font-normal capitalize'><CheckCircleIcon className='w-4 h-4 lg:w-6 lg:h-6 inline text-green-600' />Cruise dinner </span></li></ul>
                    <ul className='py-2 text-left'><li><span className='ml-2 text-gray-600 text-sm sm:text-md font-light sm:font-normal capitalize'><CheckCircleIcon className='w-4 h-4 lg:w-6 lg:h-6 inline text-green-600' />3 Meal per day</span></li></ul>
                    <ul className='py-2 text-left'><li><span className='ml-2 text-gray-600 text-sm sm:text-md font-light sm:font-normal capitalize'><CheckCircleIcon className='w-4 h-4 lg:w-6 lg:h-6 inline text-green-600' />Pick and drop services</span></li></ul>
                    <ul className='py-2 text-left'><li><span className='ml-2 text-gray-600 text-sm sm:text-md font-light sm:font-normal capitalize'><CheckCircleIcon className='w-4 h-4 lg:w-6 lg:h-6 inline text-green-600' />Smoking allow</span></li></ul>
                    <ul className='py-2 text-left'><li><span className='ml-2 text-gray-600 text-sm sm:text-md font-light sm:font-normal capitalize'><CheckCircleIcon className='w-4 h-4 lg:w-6 lg:h-6 inline text-green-600' />Valet parking</span></li></ul>
                    <ul className='py-2 text-left'><li><span className='ml-2 text-gray-600 text-sm sm:text-md font-light sm:font-normal capitalize'><CheckCircleIcon className='w-4 h-4 lg:w-6 lg:h-6 inline text-green-600' />music event</span></li></ul>

                    <div className='text-center'>
                        <h6 className='mx-auto font-bold capitalize border rounded-full mb-5 text-sm md:text-lg inline-block md:px-5 px-3 py-3 md:py-3 mt-5 bg-[#1F2937] text-white'>price: $500</h6>
                    </div>
                </div>
                <div data-aos="fade-right" className='advantage border-2 rounded-2xl lg:py-6 lg:px-10 w-5/12 '>
                    <h1 className=' text-center text-[#1F2937] text-lg my-3 lg:text-2xl font-bold capitalize'>advantage</h1>
                    <ul className='py-2 text-left'><li><span className='ml-2 text-gray-600 text-sm sm:text-md font-light sm:font-normal capitalize'><CheckCircleIcon className='w-4 h-4 lg:w-6 lg:h-6 inline text-green-600' />Cruise dinner </span></li></ul>
                    <ul className='py-2 text-left'><li><span className='ml-2 text-gray-600 text-sm sm:text-md font-light sm:font-normal capitalize'><CheckCircleIcon className='w-4 h-4 lg:w-6 lg:h-6 inline text-green-600' />3 Meal per day</span></li></ul>
                    <ul className='py-2 text-left'><li><span className='ml-2 text-gray-600 text-sm sm:text-md font-light sm:font-normal capitalize'><CheckCircleIcon className='w-4 h-4 lg:w-6 lg:h-6 inline text-green-600' />Pick and drop services</span></li></ul>
                    <ul className='py-2 text-left'><li><span className='ml-2 text-gray-600 text-sm sm:text-md font-light sm:font-normal capitalize'><CheckCircleIcon className='w-4 h-4 lg:w-6 lg:h-6 inline text-green-600' />Smoking allow</span></li></ul>
                    <ul className='py-2 text-left'><li><span className='ml-2 text-gray-600 text-sm sm:text-md font-light sm:font-normal capitalize'><CheckCircleIcon className='w-4 h-4 lg:w-6 lg:h-6 inline text-green-600' />Valet parking</span></li></ul>
                    <ul className='py-2 text-left'><li><span className='ml-2 text-gray-600 text-sm sm:text-md font-light sm:font-normal capitalize'><CheckCircleIcon className='w-4 h-4 lg:w-6 lg:h-6 inline text-green-600' />music event</span></li></ul>

                    <div className='text-center'>
                        <h6 className='mx-auto font-bold capitalize border rounded-full mb-5 text-sm md:text-lg inline-block md:px-5 px-3 py-3 md:py-3 mt-5 bg-[#1F2937] text-white'>price: $500</h6>
                    </div>
                </div>
            </div>
            <div className='flex justify-between px-4'>
                <div></div>
                <div onClick={() => navigate('/checkout')}>
                    <button className='text-center mt-10 border rounded-md px-4 py-2 mb-4 border-[#cca001] hover:bg-[#cca001]'>Procede to CheckOut <ArrowNarrowRightIcon className='text-sm  w-6 h-6  inline'></ArrowNarrowRightIcon></button>
                </div>
            </div>


        </section>
    );
};

export default ServiceDetails;