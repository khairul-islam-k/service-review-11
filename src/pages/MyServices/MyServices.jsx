import React, { useEffect, useState } from 'react';
import UseAuth from '../auth/UseAuth';
import ServicesTable from './ServicesTable';

const MyServices = () => {
    const [myServices, setMyServices] = useState([]);
    const { user } = UseAuth();
    console.log(user);

    useEffect(() => {
        fetch(`http://localhost:3000/services/myServices/${user?.email}`)
        .then(res => res.json())
        .then(data => setMyServices(data))
    },[user])
    return (
        <div className='mt-20 w-11/12 mx-auto'>
            <h3>My services</h3>

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