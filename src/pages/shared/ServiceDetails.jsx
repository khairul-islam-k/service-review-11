import React from 'react';
import { useLoaderData } from 'react-router';
import user from '../../assets/user.png'

const ServiceDetails = () => {
    const {service_image,category,company_name,description,price,added_date,service_title,user_email,website} = useLoaderData();
    return (
        <div className='mt-20 w-11/12 mx-auto'>
            <img className='mx-auto' src={service_image} alt="" />
            <h3 className='lg:text-3xl text-2xl font-bold my-3 text-center'>{service_title}</h3>
            <p className='mt-3 text-[#57045a] font-bold text-center'>Category : {category}</p>
            <p className='text-lg font-bold mt-3 text-center'>price: $ {price}</p>
            <p className='lg:text-2xl text-xl font-bold text-gray-600 mb-2.5'>description :</p>
            <div className='border-y-2 border-dashed py-4'>
                <p>{description}</p>
            </div>
            <p className='lg:text-2xl text-xl font-bold text-gray-600 mb-2.5 text-center mt-4'>Company Name</p>
            <p className='text-center'>{company_name}</p>

            <p className='lg:text-2xl text-xl font-bold text-gray-600 mb-2.5 text-center mt-4'>Added date : {added_date}</p>

            <p className='text-center mt-5'>user email :</p>
            <div className='flex items-center justify-center gap-3'>
                <img src={user} alt="" />
                <p className='lg:text-2xl text-xl font-bold text-gray-600'>{user_email}</p>
            </div>

            <p className='lg:text-2xl text-xl font-bold text-gray-600 mb-2.5 text-center mt-4'>website : {website}</p>
    
        </div>
    );
};

export default ServiceDetails;