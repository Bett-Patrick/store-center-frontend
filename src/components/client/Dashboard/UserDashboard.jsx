import React, { useState } from 'react';
import axios from 'axios';

const UserDashboard = ({ userId }) => {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUnits = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/units?ownerId=${userId}`);
      setUnits(response.data);
    } catch (error) {
      console.error('Error fetching units:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookNow = (unitId) => {
    // Implement booking logic here
    console.log(`Booking unit with ID: ${unitId}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <button
        onClick={fetchUnits}
        className="bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-red-600 focus:outline-none"
      >
        View Units
      </button>
      {loading && <p>Loading units...</p>}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {units.map((unit) => (
          <div key={unit.id} className="p-4 border rounded shadow-md">
            <img src={unit.images[0]} alt="unit image" className="w-full h-32 object-cover mb-2" />
            <h2 className="text-xl font-bold">Unit Number: {unit.unit_number}</h2>
            <p>Features: {unit.features.join(', ')}</p>
            <p>Size: {unit.storage_slot.size}</p>
            <p>Price: ${unit.storage_slot.price}</p>
            <button
              onClick={() => handleBookNow(unit.id)}
              className="bg-red-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-600 focus:outline-none mt-2"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
