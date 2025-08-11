import axios from 'axios';
import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const ServicesTable = ({ service,removeFunction }) => {
    //console.log(service)
    const { service_image, service_title, company_name, category, price, _id } = service;
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
                axios.delete(`http://localhost:3000/services/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            removeFunction(_id)
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
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={service_image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service_title}</div>
                        <div className="text-sm opacity-50">{company_name}</div>
                    </div>
                </div>
            </td>
            <td>
                {category}
            </td>
            <td>$ {price}</td>
            <th>
                <div className='flex justify-end gap-2 lg:gap-4'>
                    <Link to={`/myServices/${_id}`}><button className="btn btn-secondary">Update</button></Link>
                    <button onClick={handleDelete} className="btn btn-accent">Delete</button>
                </div>
            </th>
        </tr>
    );
};

export default ServicesTable;