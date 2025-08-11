import React from 'react';
import { IoStar } from "react-icons/io5";

const ReviewCard = ({data}) => {
    console.log(data);
    return (
        <div className='bg-base-300 p-3 rounded-xl'>
            <img className='mx-auto w-[41px] h-[41px] rounded-full' src={data?.photo} alt="" />
            <h3 className='text-center text-xl font-semibold'>Name : {data?.name}</h3>
            <div className='border-y my-3'>
                {data?.text}
            </div>
            <div className='flex justify-between items-center'>
                <IoStar className='text-amber-300' size={30} />
                <h5 className='text-3xl font-bold'>{data?.rating}</h5>
            </div>
        </div>
    );
};

export default ReviewCard;