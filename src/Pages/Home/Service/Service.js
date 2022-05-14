import React from 'react';

const Service = ({service,handleService}) => {
    const {id,title,discription,img, place,price}=service;
    return (
        <div className='service w-[266px] sm:w-[300px] md:w-[350px] pb-5 border  mx-auto mb-10 sm:mb-0 rounded-md '>
            <div className="service-image">
                <img className='w-flull' src={img} alt="service" />
            </div>
            <h1 className='text-[#1F2937] font-bold text-left px-3 mt-3 text-sm sm:text-md leading-5'>{title}</h1>
            <p className='text-left px-3 mt-2 leading-6 text-gray-600 text-sm sm:text-md font-light sm:font-normal'>{discription.slice(0,200)}</p>
            <p className='font-bold px-3  text-md text-yellow-400 rounded '>${price}</p>
            <div className='flex justify-between px-3 text-sm'>
            <h5 className='inline'>{place}</h5>
            <button className='border rounded px-2 py-1 bg-[#FDC703] hover:bg-white hover:border-[#FDC703]' type='button' onClick={()=>handleService(id)}> Book -  </button>
            </div>
        </div>
    );
};

export default Service;