import React from 'react';
import './Done.css'

const Done = () => {

    return (
        <div className='payment mt-3 lg:mt-5'>
            <div className="done w-10/12 h-[500px] relative border-4 border-yellow-600  rounded-3xl">
                <div className="content absolute bottom-7 right-5">
                    <h1 className='text-[#A906FE] font-mono text-center lg:mb-10 mb-3 font-bold capitalize text-3xl md:text-4xl'>payment done 😍</h1>
                    <h2 className='text-[#A906FE] font-mono text-center lg:mb-10 mb-3 font-bold capitalize text-3xl md:text-4xl'>have fun...💃!</h2>
                </div>
            </div>
        </div>
    );
};

export default Done;