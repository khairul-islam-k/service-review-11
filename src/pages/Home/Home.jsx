import React, { useEffect, useState } from 'react';
import { UNSAFE_SingleFetchRedirectSymbol, useLoaderData } from 'react-router';
import ServicesCard from '../shared/ServicesCard';
import Banner from './Banner';
import LottieUse from './LottieUse';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaStar } from 'react-icons/fa6';
import Counter from './Counter';
import { motion } from "motion/react"

const Home = () => {
    const [serviceAll, setServiceAll] = useState([]);
    const [partner, setPartner] = useState([]);
    const [reviews, setReviews] = useState([]);
    const services = useLoaderData();

    useEffect(() => {
        fetch('https://service-review-server-gules-seven.vercel.app/services')
            .then(res => res.json())
            .then(data => setServiceAll(data))
    }, [])

    useEffect(() => {
        fetch('https://service-review-server-gules-seven.vercel.app/partners')
            .then(res => res.json())
            .then(data => setPartner(data))
    }, [])

    useEffect(() => {
        fetch('https://service-review-server-gules-seven.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mt-20'>
            <Banner></Banner>
            <div className='bg-base-200 py-20'>
                <div className='w-11/12 mx-auto'>
                    <h3 className='lg:text-4xl text-2xl font-bold text-center mb-10'>Services</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            services.map(data => <ServicesCard key={data._id} data={data}></ServicesCard>)
                        }
                    </div>
                </div>
            </div>
            <LottieUse></LottieUse>

            {/* carousel */}
            <div className='bg-base-200 lg:py-20 py-10 mt-6'>
                <h3 className='lg:text-4xl text-2xl font-bold text-center mb-10'>Meet our partners</h3>
                {
                    partner.length>0 && <Carousel autoPlay={true}
                    infiniteLoop={true}
                    interval={3000}
                    showThumbs={false}
                    showIndicators={true}
                    stopOnHover={false}>
                    {
                        partner.map(data => <div className='mx-auto p-5 lg:w-[380px] w-[300px] bg-[#57c7a0] rounded-2xl'>
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
                }
            </div>


            {/* counter */}
            <div className='bg-[#b7ffe6] lg:py-12 py-7'>
                <h3 className='lg:text-[40px] text-3xl font-semibold lg:font-extrabold lg:mt-20 mt-12 text-center'>We <motion.span
                    animate={{ color: ['#ff5733', '#afff33', '#33ffbe', '#335eff', '#ff33da'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
                >Provide Best</motion.span> Services</h3>
                <p className='text-center text-gray-600 mt-4 mb-8'>Our platform connects you with verified, experienced person across various specialties — all at your convenience. </p>
                <Counter
                    serviceAll={serviceAll}
                    reviews={reviews}
                    partner={partner}></Counter>
            </div>

        </div>
    );
};

export default Home;