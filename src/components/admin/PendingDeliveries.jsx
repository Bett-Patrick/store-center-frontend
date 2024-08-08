import React, { useEffect, useState } from 'react';
import '../../App.css';

const PendingDeliveries = () => {
  const [pendingDeliveries, setPendingDeliveries] = useState([]);

  // Fetch data from the deliveries endpoint
  useEffect(() => {
    const fetchPendingDeliveries = async () => {
      try {
        const response = await fetch('/api/deliveries');
        if (!response.ok) {
          throw new Error('Failed to fetch deliveries');
        }
        const data = await response.json();
        setPendingDeliveries(data);
      } catch (error) {
        console.error('Error fetching deliveries:', error);
      }
    };

    fetchPendingDeliveries();
  }, []);

  return (
    <div className="min-h-screen p-4 bg-white text-black dark:bg-gray-900 dark:text-white">
      <h1 className="font-bold text-red-600 border border-red-600 m-2 w-fit rounded-md px-2 py-1 text-lg shadow-sm dark:text-red-400 dark:border-red-400">
        Pending Deliveries
      </h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Name</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Email</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Phone No.</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Unit No.</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Pickup Location</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Pickup Date</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Items</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Pickup Type</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Clear</th>
          </tr>
        </thead>
        <tbody>
          {pendingDeliveries.map((delivery, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{delivery.order.user.username || 'Unknown'}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{delivery.order.user.email || 'Unknown'}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{delivery.order.user.phone_no || 'Unknown'}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{delivery.order.storage_slot.id}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{delivery.pickup_location}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{delivery.delivery_date}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{delivery.order.item}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{/* Assume pickup type is not directly provided in the current data */}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                <input className='custom-checkbox' type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingDeliveries;
