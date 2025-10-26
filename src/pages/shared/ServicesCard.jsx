import React from 'react';
import { Link } from 'react-router';

const ServicesCard = ({data}) => {
    const {service_image,service_title,price,category,_id} = data;
    return (
        <div className='border p-4 rounded-xl bg-base-100 pb-10'>
            <img className='w-11/12 h-1/2 object-cover mx-auto rounded-lg' src={service_image} alt="" />
            <h3 className='text-2xl font-bold my-3'>{service_title}</h3>
            <p className='mt-3 text-[#57045a] font-bold'>Category : {category}</p>
            
            <div className='flex justify-between items-center'>
                <p className='text-lg font-bold mt-3'>price: $ {price}</p>
                <Link to={`/service/${_id}`}><button className='btn'>See details</button></Link>
            </div>
        </div>
    );
};

export default ServicesCard;