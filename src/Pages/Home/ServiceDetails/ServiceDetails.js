
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceID} = useParams({});
    const navigate = useNavigate();
    

    return (
        <section className='w-10/12 mx-auto border-2 rounded-md mt-10 lg:px-24'>
            <div className="image">
                <img className='p-4 w-full' src="https://i.ibb.co/2vTczFh/10004.png" alt="details" />
            </div>
            <h1 className='text-[#1F2937] text-2xl font-bold capitalize text-left p-4'>Lorem ipsum dolor sit amet consectetur adipisicing ={serviceID}. </h1>
            <p className='text-md font-normal text-left p-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi, laboriosam quos adipisci quaerat dolores libero illo commodi enim aliquid error nesciunt sequi maiores vero autem veritatis eos cupiditate perferendis eveniet sint, voluptate explicabo nobis repellendus pariatur! Alias possimus quidem inventore ea corporis numquam ab. Autem nostrum accusantium fugit aperiam..</p>
            <div className='advantage'>
                <h1 className='text-center text-[#1F2937] text-2xl font-bold capitalize'>advantage</h1>
                <ul className='p-4 text-center'><li><span>0</span> free smokig</li></ul>
                <ul className='p-4 text-center'><li><span>0</span> free smokig</li></ul>
                <ul className='p-4 text-center'><li><span>0</span> free smokig</li></ul>
                <ul className='p-4 text-center'><li><span>0</span> free smokig</li></ul>
                <ul className='p-4 text-center'><li><span>0</span> free smokig</li></ul>
                <ul className='p-4 text-center'><li><span>0</span> free smokig</li></ul>
                <div className='text-center'>
                    <h6 className=' mx-auto font-bold capitalize border rounded-full  inline-block px-5 py-3 mt-5 bg-[#1F2937] text-white'>price: $500</h6>
                </div>
            </div>
            <div className='flex justify-between px-4'>
                <div></div>
                <div onClick={()=>navigate('/checkout')}>
                    <button className='text-center mt-10 border rounded-md px-4 py-2 mb-4 border-[#cca001] hover:bg-[#cca001]'>Procede to CheckOut <ArrowNarrowRightIcon className='text-sm  w-6 h-6  inline'></ArrowNarrowRightIcon></button>
                </div>
            </div>


        </section>
    );
};

export default ServiceDetails;