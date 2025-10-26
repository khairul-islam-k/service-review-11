import React, { useEffect, useState } from 'react';
import UseAuth from '../auth/UseAuth';
import ServicesTable from './ServicesTable';

const MyServices = () => {
    const [myServices, setMyServices] = useState([]);
    const { user } = UseAuth();

    const removeFunction = (id) => {
        const remainService = myServices.filter(service => service._id !== id);
        setMyServices(remainService);
    }

    useEffect(() => {
        fetch(`https://service-review-server-gules-seven.vercel.app/services/myServices/${user?.email}`,{
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => setMyServices(data))
    },[user])
    return (
        <div className='pt-20 w-11/12 mx-auto'>
            <h3 className='lg:text-4xl text-2xl font-bold text-center mb-10'>My services</h3>

            {/* table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>services</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            myServices.map(service => <ServicesTable
                            service={service}
                            removeFunction={removeFunction}
                            key={service._id}
                            ></ServicesTable>)
                        }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyServices;