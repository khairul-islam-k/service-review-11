import React from 'react';
import { FaStar } from 'react-icons/fa';

const ShowReviews = ({ review }) => {
    const { photo,name,rating,text,date } = review;
    console.log(review);
    return (
        <div className='bg-[#f1e2e2] mt-10 lg:mt-20 p-4 lg:p-8 rounded-2xl'>
            <div className='flex justify-between items-center border-b-2 border-dashed border-gray-400 pb-4 mb-4'>
                <div className='flex items-center gap-3'>
                    <img className='w-[41px] h-[41px] rounded-full' src={photo} alt="" />
                    <p className='font-bold'>{name}</p>
                </div>

                <div className='flex gap-2'>
                    <FaStar className='text-amber-300' size={20} />
                    <p className='text-lg font-bold'>{rating}</p>
                </div>
            </div>
            <p className='text-gray-500'>{text}</p>
            <p className='mt-4 text-xl font-bold'>date : {date}</p>
        </div>
    );
};

export default ShowReviews;