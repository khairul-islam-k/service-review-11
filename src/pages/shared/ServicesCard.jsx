import React from 'react';
import { Link } from 'react-router';

const ServicesCard = ({data}) => {
    const {service_image,service_title,description,price,category,_id} = data;
    return (
        <div className='border p-4 rounded-xl bg-[#33ffbe]'>
            <img className='w-[380px] h-[200px] ' src={service_image} alt="" />
            <h3 className='lg:text-3xl text-2xl font-bold my-3'>{service_title}</h3>
            <p className='text-gray-500'>{description}</p>
            <p className='mt-3 text-[#57045a] font-bold'>Category : {category}</p>
            <p className='text-lg font-bold mt-3'>price: $ {price}</p>
            <div className='flex justify-end'><Link to={`/service/${_id}`}><button className='btn'>See details</button></Link></div>
        </div>
    );
};

export default ServicesCard;