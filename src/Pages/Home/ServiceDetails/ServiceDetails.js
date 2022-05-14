import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceID} = useParams({});
    console.log(serviceID);
    return (
        <section className=''>
            <div className="image">
                <img src="https://i.ibb.co/2vTczFh/10004.png" alt="details" />
            </div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing. {serviceID}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi, laboriosam quos adipisci quaerat dolores libero illo commodi enim aliquid error nesciunt sequi maiores vero autem veritatis eos cupiditate perferendis eveniet sint, voluptate explicabo nobis repellendus pariatur! Alias possimus quidem inventore ea corporis numquam ab. Autem nostrum accusantium fugit aperiam..</p>
            <div className='advantage'>
                <h1>advantage</h1>
                <ul><li>free smokig</li></ul>
                <ul><li>free smokig</li></ul>
                <ul><li>free smokig</li></ul>
                <ul><li>free smokig</li></ul>
                <ul><li>free smokig</li></ul>
                <ul><li>free smokig</li></ul>
                <h6>price: $500</h6>
            </div>
            <button className=''>Procede to CheckOut</button>


        </section>
    );
};

export default ServiceDetails;