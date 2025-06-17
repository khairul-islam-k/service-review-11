import React, { useEffect, useState } from 'react';
import UseAuth from '../auth/UseAuth';
import ReviewCard from './ReviewCard';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = UseAuth();

    useEffect(() => {
        fetch(`http://localhost:3000/reviews/${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user])
    return (
        <div className='mt-20'>
            <h3 className='lg:text-4xl text-2xl font-bold text-center mb-10'>My Reviews</h3>

            {/* CARD */}
            <div className='bg-[#b6f8e1]'>
                <div className='py-20 flex flex-col items-center lg:gap-4 gap-2'>

                    {
                        reviews.map(review => <ReviewCard
                        review={review}
                        key={review._id}
                        ></ReviewCard>)
                    }

                </div>
            </div>

        </div>
    );
};

export default MyReviews;