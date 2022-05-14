
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);



    useEffect(()=>{
        fetch(`mydata/services.json`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    console.log(services);
    const handleService = (id) => {
        console.log(id);
    }
   
    

    return (
        <section className=''>
            <h1 className='text-center text-3xl sm:text-3xl md:text-4xl font-bold my-10'>Our Services</h1>
            <div className='grid sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 px-6 sm:px-12 md:px-28'>
                {
                    services.map(service => <Service key={service.id} service={service} handleService={handleService}></Service>)
                }
            </div>

        </section>
    );
};

export default Services;