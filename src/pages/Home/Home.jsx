import React, { useEffect, useState } from 'react';
import { UNSAFE_SingleFetchRedirectSymbol, useLoaderData } from 'react-router';
import ServicesCard from '../shared/ServicesCard';
import Banner from './Banner';
import LottieUse from './LottieUse';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slide_1 from '../../assets/slide-1.png'
import slide_2 from '../../assets/slide-2.png'
import slide_3 from '../../assets/slide-3.png'
import { FaStar } from 'react-icons/fa6';

const Home = () => {
    const [patner, setPatner] = useState([]);
    const services = useLoaderData();
    useEffect(() => {
        fetch('/patner.json')
            .then(res => res.json())
            .then(data => setPatner(data))
    }, [])
    return (
        <div className='mt-20'>
            <Banner></Banner>
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
            <LottieUse></LottieUse>

            {/* carousel */}
            <div className='bg-[#e2f0eb] lg:py-20 py-10 mt-6'>
                <h3 className='lg:text-4xl text-2xl font-bold text-center mb-10'>Meet our partners</h3>
                <Carousel showThumbs={false} autoPlay infiniteLoop>
                {
                    patner.map(data => <div className='mx-auto p-5 lg:w-[380px] w-[300px] bg-[#57c7a0] rounded-2xl'>
                        <div className='flex items-center lg:gap-4 gap-3'>
                            <div className='w-[41px] h-[41px]'><img className='rounded-full' src={data.logo} alt="" /></div>
                            <h3 className='lg:text-2xl text-xl font-bold'>{data.name}</h3>
                        </div>
                        <div className='border-y py-4 mt-4 border-dotted'>
                            {data.description}
                        </div>
                        <div className='flex pt-4'>
                            <FaStar className='text-amber-300' size={20} />
                            <FaStar className='text-amber-300' size={20} />
                            <FaStar className='text-amber-300' size={20} />
                            <FaStar className='text-amber-300' size={20} />
                            <FaStar className='text-amber-300' size={20} />
                        </div>
                    </div>)
                }
            </Carousel>
            </div>

            
        </div>
    );
};

export default Home;