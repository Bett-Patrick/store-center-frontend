import React, { useEffect, useState } from 'react';
import useFetch from 'react-fetch-hook';
import '../../App.css';

const DefaultedClients = () => {
  const { data: users, error: usersError, isLoading: usersLoading } = useFetch('/api/users');
  const { data: orders, error: ordersError, isLoading: ordersLoading } = useFetch('/api/orders');
  const [defaultedClients, setDefaultedClients] = useState([]);

  useEffect(() => {
    if (users && orders) {
      const currentDate = new Date();

      const combinedData = orders
        .filter(item => new Date(item.end_date) < currentDate)
        .map(item => {
          const user = users.find(user => user.id === item.user_id);
          const daysDefaulted = Math.floor((currentDate - new Date(item.end_date)) / (1000 * 60 * 60 * 24));
          return {
            id: item.id,
            userId: user ? user.id : null,
            name: user ? user.username : "Unknown",
            email: user ? user.email : "Unknown",
            phone: user ? user.phone_no : "Unknown",
            unit: item.storage_slot_id,
            deliveryDate: item.start_date,
            dueDate: item.end_date,
            daysDefaulted: daysDefaulted,
            fine: `$${daysDefaulted * 5}`,
            clear: false
          };
        });

      setDefaultedClients(combinedData);
    }
  }, [users, orders]);

  const handleCheckboxChange = async (clientId, unitId) => {
    // console.log('Checkbox changed for clientId:', clientId, 'unitId:', unitId);

    // Update the availability of the storage slot on the server
    try {
      const response = await fetch(`/api/storage_slots/${unitId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ availability: true }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update storage slot availability. Status: ${response.status}`);
      }

      // console.log('Storage slot updated successfully');

      // Remove the client from the list
      setDefaultedClients(prevClients =>
        prevClients.filter(client => client.id !== clientId)
      );

      // console.log('Client removed from the state');
    } catch (error) {
      console.error('Error updating storage slot availability:', error);
    }
  };

  if (usersLoading || ordersLoading) {
    return <div>Loading...</div>;
  }

  if (usersError || ordersError) {
    return <div>Error fetching data. Please try again later.</div>;
  }

  return (
    <div className="min-h-screen p-4 bg-white text-black dark:bg-gray-900 dark:text-white">
      <h1 className="font-bold text-red-600 border border-red-600 m-2 w-fit rounded-md px-2 py-1 text-lg dark:text-red-400 dark:border-red-400">Defaulted Clients</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Name</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Email</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Phone No.</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Unit No.</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Delivery Date</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Due Date</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Days Defaulted</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Fine</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Clear</th>
          </tr>
        </thead>
        <tbody>
          {defaultedClients.map((client, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{client.name}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{client.email}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{client.phone}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{client.unit}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{client.deliveryDate}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{client.dueDate}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{client.daysDefaulted}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{client.fine}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                <input
                  className='custom-checkbox'
                  type="checkbox"
                  onChange={() => handleCheckboxChange(client.id, client.unit)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DefaultedClients;
