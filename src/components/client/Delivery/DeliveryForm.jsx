import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../../App.css'; // Correct the path based on your project structure

const DeliveryForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedOption } = location.state || { selectedOption: {} };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    items: '',
    location: '',
    price: selectedOption.price || 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/confirmation');
  };

  return (
    <div className="delivery-form-container">
      <div className="delivery-form">
        <h2 className="text-2xl font-bold mb-6 text-center">Delivery Form</h2>
        <p className="text-xl mb-4">Price: ${formData.price.toFixed(2)}</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="items">
              Items
            </label>
            <input
              type="text"
              name="items"
              value={formData.items}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="Delivery Request"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Delivery Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryForm;
