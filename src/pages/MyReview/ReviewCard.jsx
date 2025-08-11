import axios from 'axios';
import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const ReviewCard = ({ review,removeFunction }) => {
    console.log(review);
    const { serviceTitle, text, rating, _id } = review;

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/reviews/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            removeFunction(_id);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => console.log(error))
            }
        });
    }
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
                    <button onClick={handleDelete} className="btn btn-accent">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;