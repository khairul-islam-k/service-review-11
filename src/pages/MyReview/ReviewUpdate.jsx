import React, { useState } from 'react';
import Rating from 'react-rating';
import { FaRegStar } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import UseAuth from '../auth/UseAuth';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const ReviewUpdate = () => {
    const review = useLoaderData();
    const { text, rating, service_id, _id } = review;
    const [newRating, setRating] = useState(rating);
    const { user } = UseAuth();
    const dateN = user?.reloadUserInfo?.lastRefreshAt;
    const newDate = dateN?.split('T');


    const handleReview = (e) => {
        e.preventDefault();

        const text = e.target.text.value;
        const email = user.email;
        const date = newDate[0];
        const name = user.displayName;
        const photo = user.photoURL;
        //const service_id = _id;

        const newReview = {
            text, email, date, service_id, rating: newRating, name, photo
        };

        axios.put(`http://localhost:3000/reviews/${_id}`, newReview)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Review update successfully",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='mt-20'>
            <h3 className='lg:text-4xl text-2xl font-bold text-center mb-10'>Review update</h3>
            {/* update */}
            <div className='bg-[#39bda7] mt-10 lg:mt-20 p-4 lg:p-8 rounded-2xl w-11/12 mx-auto lg:mb-20'>
                <h3 className='text-xl font-medium mb-3'>Your Rating</h3>
                <div>
                    <Rating
                        initialRating={newRating}
                        emptySymbol={<FaRegStar size={30} />}
                        fullSymbol={<FaStar className='text-yellow-500' size={30} />}
                        onChange={(rate) => setRating(rate)}
                    />
                </div>
                <form onSubmit={handleReview} className='mt-4'>
                    <textarea defaultValue={text} className='border w-full bg-amber-100' name="text" id="text" rows="5"></textarea><br />
                    <input className='mt-4 mr-2' type="checkbox" />
                    We care about protecting your data. Here's our privacy policy.<br />
                    <button className='btn btn-primary mt-4'>Submit Review</button>
                </form>
            </div>

        </div>
    );
};

export default ReviewUpdate;