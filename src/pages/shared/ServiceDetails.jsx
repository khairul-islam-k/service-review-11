import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import userP from '../../assets/user.png';
import Rating from 'react-rating';
import { FaRegStar } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import axios from 'axios';
import ShowReviews from './ShowReviews';
import UseAuth from '../auth/UseAuth';
import Swal from 'sweetalert2';
const ServiceDetails = () => {
    const { service_image, category, company_name, description, price, added_date, service_title, user_email, website, _id } = useLoaderData();
    const [rating, setRating] = useState(0);
    const [totalReviews, setTotalReviews] = useState([]);
    const [reviews, setReviews] = useState([]);
    const { user } = UseAuth();
    const dateN = user?.reloadUserInfo?.lastRefreshAt;
    const newDate = dateN?.split('T');

    const handleReview = (e) => {
        e.preventDefault();

        if (!user) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please login first",
                footer: '<a href="#">Why do I have this issue?</a>'
            })
            return;
        }
        const text = e.target.text.value;
        const email = user.email;
        const date = newDate[0];
        const name = user.displayName;
        const photo = user.photoURL;
        const service_id = _id;

        const newReview = {
            text, email, date, service_id, rating, name, photo
        };

        setReviews([...reviews, newReview]);
        setTotalReviews([...totalReviews, newReview]);

        axios.post('https://service-review-server-gules-seven.vercel.app/reviews', newReview)
            .then(res => {
                if (res.data) {
                    e.target.reset();
                }
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetch('https://service-review-server-gules-seven.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setTotalReviews(data))
    }, [])

    useEffect(() => {
        fetch(`https://service-review-server-gules-seven.vercel.app/reviews?id=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])
    return (
        <div className='mt-20'>
            <div className='w-11/12 mx-auto'>
                <img className='mx-auto' src={service_image} alt="" />
                <h3 className='lg:text-3xl text-2xl font-bold my-3 text-center'>{service_title}</h3>
                <p className='mt-3 text-[#57045a] font-bold text-center'>Category : {category}</p>
                <p className='text-lg font-bold mt-3 text-center'>price: $ {price}</p>
                <p className='lg:text-2xl text-xl font-bold text-gray-600 mb-2.5'>description :</p>
                <div className='border-y-2 border-dashed py-4'>
                    <p>{description}</p>
                </div>
                <p className='lg:text-2xl text-xl font-bold text-gray-600 mb-2.5 text-center mt-4'>Company Name</p>
                <p className='text-center'>{company_name}</p>

                <p className='lg:text-2xl text-xl font-bold text-gray-600 mb-2.5 text-center mt-4'>Added date : {added_date}</p>

                <p className='text-center mt-5'>user email :</p>
                <div className='flex items-center justify-center gap-3'>
                    <img src={userP} alt="" />
                    <p className='lg:text-2xl text-xl font-bold text-gray-600'>{user_email}</p>
                </div>

                <p className='lg:text-2xl text-xl font-bold text-gray-600 mb-2.5 text-center mt-4'>website : {website}</p>
            </div>

            {/* rating summery */}
            <div className="overflow-x-auto lg:w-[380px] lg:ml-10 lg:my-20 my-10">
                <h3 className='text-2xl font-bold mb-4'>Review summary</h3>
                <table className="table border">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>no</th>
                            <th>Review</th>
                            <th>count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Total</td>
                            <td>{totalReviews.length}</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>this service</td>
                            <td>{reviews.length}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* show rating */}
            <div className='bg-[#98a09ff3] py-5'>
                <div className='w-11/12 mx-auto'>
                    {
                        reviews.map(review => <ShowReviews key={review._id} review={review}></ShowReviews>)
                    }
                </div>
            </div>

            {/* your rating */}
            <div className='bg-[#39bda7] mt-10 lg:mt-20 p-4 lg:p-8 rounded-2xl w-11/12 mx-auto lg:mb-20'>
                <h3 className='text-xl font-medium mb-3'>Your Rating</h3>
                <div>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FaRegStar size={30} />}
                        fullSymbol={<FaStar className='text-yellow-500' size={30} />}
                        onChange={(rate) => setRating(rate)}
                    />
                </div>
                <form onSubmit={handleReview} className='mt-4'>
                    <textarea className='border w-full bg-amber-100' name="text" id="text" rows="5"></textarea><br />
                    <input className='mt-4 mr-2' type="checkbox" />
                    We care about protecting your data. Here's our privacy policy.<br />
                    <button className='btn btn-primary mt-4'>Submit Review</button>
                </form>
            </div>

        </div>
    );
};

export default ServiceDetails;