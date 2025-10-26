import React, { useEffect, useState } from "react";

const Tracking = () => {
  // Mock service data (replace with real data or API later)
  const [allServices, setAllServices] = useState([]);
  const [reviews, setReviews] = useState([]);


  const [search, setSearch] = useState("");
  const [selectedService, setSelectedService] = useState(null);

  // Filter services based on search text
  const filtered = allServices.filter((service) =>
    service.service_title.toLowerCase().includes(search.toLowerCase())
  );

  // selected review
  useEffect(() => {
    fetch(`https://service-review-server-gules-seven.vercel.app/reviews?id=${selectedService?._id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [selectedService])

  // all services
  useEffect(() => {
    fetch("https://service-review-server-gules-seven.vercel.app/services")
      .then(res => res.json())
      .then(data => setAllServices(data))
  }, [])

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <h2 className="text-2xl font-bold text-center text-primary mb-4">
        🔍 Track Your Service
      </h2>

      {/* Search Box */}
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Enter service name..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSelectedService(null);
          }}
          className="input input-bordered w-full"
        />
      </div>

      {/* Search Results */}
      {search && !selectedService && (
        <div className="max-w-md mx-auto bg-base-100 shadow-md rounded-xl p-4">
          <h3 className="font-semibold text-gray-600 mb-2">
            Matching Services:
          </h3>
          {filtered.length > 0 ? (
            <ul className="space-y-2">
              {filtered.map((service) => (
                <li
                  key={service?._id}
                  onClick={() => setSelectedService(service)}
                  className="p-2 bg-base-200 rounded-lg cursor-pointer hover:bg-primary hover:text-white transition"
                >
                  {service.service_title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No matching services found.</p>
          )}
        </div>
      )}

      {/* Selected Service Details */}
      {selectedService && (
        <div className="max-w-md mx-auto bg-base-100 shadow-md rounded-xl p-6 mt-6 text-center">
          <h3 className="text-xl font-semibold text-primary mb-2">
            {selectedService.service_title}
          </h3>
          <p className="text-gray-600">
            <b>Added Date:</b> {selectedService.added_date}
          </p>
          <p className="text-gray-600 mt-1">
            <b>Total Reviews:</b> {reviews.length}
          </p>

          <button
            className="btn btn-secondary mt-4"
            onClick={() => setSelectedService(null)}
          >
            🔙 Back to Search
          </button>
        </div>
      )}
    </div>
  );
};

export default Tracking;
