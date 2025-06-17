import React from 'react';
import { Link } from 'react-router';

const ServicesTable = ({ service }) => {
    console.log(service)
    const { service_image, service_title, company_name, category, price,_id } = service;
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
                    <button className="btn btn-accent">Delete</button>
                </div>
            </th>
        </tr>
    );
};

export default ServicesTable;