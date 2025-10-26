import React, { useEffect, useState } from 'react';
import UseAuth from '../auth/UseAuth';
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashBoardHome = () => {
    const {user} = UseAuth();
    const [totalServices, SetTotalServices] = useState(0);
    const [myServices, SetMyServices] = useState(0);
    const [totalReviews, SetTotalReviews] = useState(0);
    const [myReviews, SetMyReviews] = useState(0);
    // Example data (you can replace with real values)
  const userName = user?.displayName;
//   const totalServices = 40;
//   const myServices = 10;
//   const totalReviews = 120;
//   const myReviews = 25;

  const pieData = [
    { name: "My Services", value: myServices },
    { name: "Total Services", value: totalServices },
    { name: "My Reviews", value: myReviews },
    { name: "Total Reviews", value: totalReviews - myReviews },
  ];

  const COLORS = ["#3b82f6", "#60a5fa", "#22c55e", "#86efac"];

    useEffect(() => {
        fetch("https://service-review-server-gules-seven.vercel.app/services")
        .then(res => res.json())
        .then(data => SetTotalServices(data.length))

        fetch("https://service-review-server-gules-seven.vercel.app/reviews")
        .then(res => res.json())
        .then(data => SetTotalReviews(data.length))
    },[])

    useEffect(() => {
        fetch(`https://service-review-server-gules-seven.vercel.app/services/myServices/${user?.email}`,{
            credentials: "include"
        }).then(res => res.json())
        .then(data => SetMyServices(data.length))

        
        fetch(`https://service-review-server-gules-seven.vercel.app/reviews/${user?.email}`,{
            credentials: "include"
        })
            .then(res => res.json())
            .then(data => SetMyReviews(data.length))


    },[user])
    return (
        <div className="p-6 min-h-screen bg-base-200">
      {/* Username */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-primary">Welcome, {userName} 👋</h2>
        <p className="text-sm text-gray-500">Your dashboard overview</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
        <div className="stat bg-base-100 shadow-md rounded-2xl">
          <div className="stat-title text-gray-500">Total Services</div>
          <div className="stat-value text-primary">{totalServices}</div>
        </div>
        <div className="stat bg-base-100 shadow-md rounded-2xl">
          <div className="stat-title text-gray-500">My Services</div>
          <div className="stat-value text-secondary">{myServices}</div>
        </div>
        <div className="stat bg-base-100 shadow-md rounded-2xl">
          <div className="stat-title text-gray-500">Total Reviews</div>
          <div className="stat-value text-accent">{totalReviews}</div>
        </div>
        <div className="stat bg-base-100 shadow-md rounded-2xl">
          <div className="stat-title text-gray-500">My Reviews</div>
          <div className="stat-value text-info">{myReviews}</div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-base-100 shadow-md rounded-2xl p-4">
        <h3 className="text-lg font-semibold mb-4 text-center">Overview Chart</h3>
        <div className="w-full h-64">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name }) => name}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    );
};

export default DashBoardHome;