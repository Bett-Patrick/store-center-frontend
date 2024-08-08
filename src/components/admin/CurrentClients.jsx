import React, { useEffect, useState } from 'react';
import useFetch from 'react-fetch-hook';
import '../../App.css';
import '../../index.css';

const CurrentClients = () => {
  const ordersUrl = '/api/orders';

  const ordersFetch = useFetch(ordersUrl);
  const [currentClients, setCurrentClients] = useState([]);

  useEffect(() => {
    if (!ordersFetch.error && ordersFetch.data) {
      const orders = ordersFetch.data;

      const activeClients = orders
        .filter(order => !order.is_delivered && !order.is_picked_up)
        .map(order => ({
          id: order.id,
          name: order.user.username || "Unknown",
          email: order.user.email || "Unknown",
          phone: order.user.phone_no || "Unknown",
          unit: order.storage_slot.id,
          deliveryDate: order.start_date,
          dueDate: order.end_date,
          clear: false,
        }));

      setCurrentClients(activeClients);
    }
  }, [ordersFetch]);

  const handleCheckboxChange = async (orderId, index) => {
    // Update the 'is_delivered' status on the server
    try {
      const response = await fetch(`${ordersUrl}/${orderId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ is_delivered: true }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update order status. Status: ${response.status}`);
      }

      // Update local state to reflect the change
      setCurrentClients(prevClients => {
        const updatedClients = [...prevClients];
        updatedClients[index].clear = true; // Update 'clear' to true after checkbox is checked
        return updatedClients;
      });

      console.log('Order status updated successfully');
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  if (ordersFetch.isLoading) {
    return <div>Loading...</div>;
  }

  if (ordersFetch.error) {
    return <div>Error fetching data. Please try again later.</div>;
  }

  return (
    <div className="min-h-screen p-4 bg-white text-black dark:bg-gray-900 dark:text-white">
      <h1 className="font-bold text-red-600 border border-red-600 m-2 w-fit rounded-md px-2 py-1 text-lg dark:text-red-400 dark:border-red-400">Current Clients</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Name</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Email</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Phone No.</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Unit No.</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Delivery Date</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Due Date</th>
            <th className="border border-gray-300 p-2 dark:border-gray-700">Clear</th>
          </tr>
        </thead>
        <tbody>
          {currentClients.map((client, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{client.name}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{client.email}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{client.phone}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{client.unit}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{client.deliveryDate}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">{client.dueDate}</td>
              <td className="border border-gray-300 p-2 dark:border-gray-700">
                <input
                  className='custom-checkbox'
                  type="checkbox"
                  checked={client.clear}
                  onChange={() => handleCheckboxChange(client.id, index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrentClients;
