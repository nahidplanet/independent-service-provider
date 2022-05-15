
import React from 'react';
import useService from '../../../Hooks/useService';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useService();
    
    return (
        <section className=''>
            <h1 className='text-center text-3xl sm:text-3xl md:text-4xl font-bold my-10' id='services'>Our Services</h1>
            <div className='grid sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 px-6 sm:px-12 md:px-28'>
                {
                    services.map(service => <Service key={service.id} service={service} ></Service>)
                }
            </div>

        </section>
    );
};

export default Services;