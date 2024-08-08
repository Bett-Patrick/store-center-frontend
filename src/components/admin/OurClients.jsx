import React from 'react';
import useFetch from 'react-fetch-hook';
import '../../App.css';

const OurClients = () => {
  const { isLoading, data, error } = useFetch('/api/users');

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }


  return (
    <div className="min-h-screen p-4 bg-white text-black dark:bg-gray-900 dark:text-white">
      <h1 className="font-bold text-red-600 border border-red-600 m-2 w-fit rounded-md px-2 py-1 text-lg dark:text-red-400 dark:border-red-400">Our Clients</h1>
      <div className="">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 dark:border-gray-700">ID</th>
              <th className="border border-gray-300 p-2 dark:border-gray-700">Username</th>
              <th className="border border-gray-300 p-2 dark:border-gray-700">Phone Number</th>
              <th className="border border-gray-300 p-2 dark:border-gray-700">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}>
                <td className="border border-gray-300 p-2 dark:border-gray-700">{user.id}</td>
                <td className="border border-gray-300 p-2 dark:border-gray-700">{user.username}</td>
                <td className="border border-gray-300 p-2 dark:border-gray-700">{user.phone_no}</td>
                <td className="border border-gray-300 p-2 dark:border-gray-700">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OurClients;
