import React from 'react';
import { UNSAFE_SingleFetchRedirectSymbol, useLoaderData } from 'react-router';
import ServicesCard from '../shared/ServicesCard';

const Home = () => {
    const services = useLoaderData();
    //console.log(data);
    return (
        <div className='mt-20'>
            <div className='bg-[#e2f0eb] py-20'>
                <div className='w-11/12 mx-auto'>
                  <h3 className='lg:text-4xl text-2xl font-bold text-center mb-10'>Services</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            services.map(data => <ServicesCard key={data._id} data={data}></ServicesCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;