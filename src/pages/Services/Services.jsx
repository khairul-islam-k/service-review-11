import React from 'react';
import { useLoaderData } from 'react-router';
import ServicesCard from '../shared/ServicesCard';

const Services = () => {
    const services = useLoaderData();

    return (
        <div className='mt-20 bg-[#e2f0eb]'>
            <div className='w-11/12 mx-auto py-10'>
                <h3 className='lg:text-4xl text-2xl font-bold text-center'>All Services Card</h3>
                <p className='text-center mb-10'>Here are three types of cards such as - food, transport and IT. You can learn more about them if you want. OR you can add any work if you want.You give any review about them.Our platform are always trying to provide the best service to our customers</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        services.map(data => <ServicesCard data={data} key={data._id}></ServicesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;