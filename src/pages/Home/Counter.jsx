import React from 'react';
import service from '../../assets/services.png';
import review from '../../assets/review.png';
import partners from '../../assets/partners.png';
import CountUp from 'react-countup';

const Counter = ({serviceAll,reviews,partner}) => {
    const servicesN = serviceAll.length;
    const reviewsN = reviews.length;
    const partnerN = partner.length;
    console.log(servicesN,reviewsN,partnerN);
    return (
        <div className='mb-20 lg:max-w-[1280px] mx-auto grid lg:grid-cols-3 gap-5 px-4'>

            <div className='bg-[#FFFFFF] lg:h-[283px]  rounded-3xl flex justify-center items-center p-3'>
            <div>
            <img src={service} alt="" />
            <h3 className='text-4xl font-bold my-4'>
                <CountUp 
            end={servicesN}
            duration={5} />+</h3>
            <p className='text-lg text-gray-500'>Total Services</p>
            </div>
            </div>

            <div className='bg-[#FFFFFF] lg:h-[283px]  rounded-3xl flex justify-center items-center p-3'>
            <div>
            <img src={review} alt="" />
            <h3 className='text-4xl font-bold my-4'>
                <CountUp 
            end={reviewsN}
            duration={5} />+</h3>
            <p className='text-lg text-gray-500'>Total reviews</p>
            </div>
            </div>

            <div className='bg-[#FFFFFF] lg:h-[283px]  rounded-3xl flex justify-center items-center p-3'>
            <div>
            <img src={partners} alt="" />
            <h3 className='text-4xl font-bold my-4'>
                <CountUp 
            end={partnerN}
            duration={5} />+</h3>
            <p className='text-lg text-gray-500'>Partners</p>
            </div>
            </div>


        </div>
    );
};

export default Counter;