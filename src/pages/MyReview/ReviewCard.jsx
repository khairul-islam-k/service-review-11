import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router';

const ReviewCard = ({ review }) => {
    console.log(review);
    const { serviceTitle, text,rating,_id } = review;
    return (
        <div className="card lg:w-96 w-[350px] bg-base-100 card-sm shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{serviceTitle}</h2>
                <p className='text-xl font-bold text-gray-500'>review :</p>
                <p>{text}</p>
                <div className='flex gap-2'>
                    <FaStar className='text-amber-300' size={20} />
                    <p className='text-lg font-bold'>{rating}</p>
                </div>
                <div className='flex justify-end gap-2 lg:gap-4'>
                    <Link to={`/myReviews/${_id}`}><button className="btn btn-secondary">Update</button></Link>
                    <button className="btn btn-accent">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;