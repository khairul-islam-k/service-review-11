import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ServicesCard from '../shared/ServicesCard';

const Services = () => {
    const allServices = useLoaderData();
    const [services, setServices] = useState(allServices);

    const handleSearch = (e) => {
        const search = allServices.filter(service => service.service_title.toLowerCase().includes(e.target.value.toLowerCase()))
        setServices(search)
    }

    const handleFood = () => {
        const foodServices = allServices.filter(service => service.category === 'food');
        setServices(foodServices);
    }

    const handleTransport = () => {
        const transportServices = allServices.filter(service => service.category === 'transport');
        setServices(transportServices);
    }

    const handleIT = () => {
        const ITServices = allServices.filter(service => service.category === 'IT');
        setServices(ITServices);
    }

    const handleHigher = () => {
        fetch('http://localhost:3000/highPrice')
        .then(res => res.json())
        .then(data => setServices(data))
    }

    const handleLower = () => {
        fetch('http://localhost:3000/lowPrice')
        .then(res => res.json())
        .then(data => setServices(data))
    }

    return (
        <div className='mt-20 bg-base-200 pt-4'>
            <h3 className='lg:text-4xl text-2xl font-bold text-center'>All Services Card</h3>
            {/* dropdown */}
            <div className='flex justify-center pt-5'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 btn-primary">Sort by</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={handleFood}><a>Food</a></li>
                        <li onClick={handleTransport}><a>Transport</a></li>
                        <li onClick={handleIT}><a>IT</a></li>
                        <li onClick={handleHigher}><a>higher price</a></li>
                        <li onClick={handleLower}><a>lower price</a></li>
                    </ul>
                </div>
            </div>
            {/* search fild */}
            <div className='text-center mt-10'>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" onChange={handleSearch} required placeholder="Search" />
                </label>
            </div>

            <div className='w-11/12 mx-auto py-10'>
                <p className='text-center mb-10'>Here are three types of cards such as - food, transport and IT. You can learn more about them if you want. OR you can add any work if you want.You give any review about them.Our platform are always trying to provide the best service to our customers</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        services.map(data => <ServicesCard data={data} key={data._id}></ServicesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;