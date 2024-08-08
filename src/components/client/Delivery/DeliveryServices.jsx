import React from 'react';
import { useNavigate } from 'react-router-dom';

const deliveryOptions = [
    {
        id: 1,
        vehicle: 'Van',
        price: 20.00,
        speed: 'Standard',
        capacity: 'Large',
        distance: 'Up to 50 miles',
        image: 'https://img.freepik.com/premium-photo/photo-realistic-deliveryman-is-carrying-loading-boxes-trunk-company-car_553012-85314.jpg?w=826'
    },
    {
        id: 2,
        vehicle: 'Truck',
        price: 50.00,
        speed: 'Express',
        capacity: 'Extra Large',
        distance: 'Up to 200 miles',
        image: 'https://img.freepik.com/premium-photo/truck-asphalt-road-city_221128-17216.jpg?w=996'
    },
    {
        id: 3,
        vehicle: 'Motorbike',
        price: 10.00,
        speed: 'Next-Day',
        capacity: 'Small',
        distance: 'Up to 20 miles',
        image: 'https://img.freepik.com/free-photo/delivery-person-riding-motorcycle_23-2150704665.jpg?t=st=1716039970~exp=1716043570~hmac=f20e5424f9b22e3d31088356943c2c377fd0a1635d18fa4831472de1efabf5d7&w=996'
    },
    {
        id: 4,
        vehicle: 'Bicycle',
        price: 5.00,
        speed: 'Same-Day',
        capacity: 'Small',
        distance: 'Up to 10 miles',
        image: 'https://as2.ftcdn.net/v2/jpg/03/33/95/83/1000_F_333958322_MhO2k9G5VEFpToQlZqMdkWkO3LrdOBBa.jpg'
    },
    {
        id: 5,
        vehicle: 'Drone',
        price: 30.00,
        speed: 'Immediate',
        capacity: 'Small',
        distance: 'Up to 15 miles',
        image: 'https://img.freepik.com/premium-psd/drone-mockup-used-air-transportation_23-2150855034.jpg?w=740'
    },
    {
        id: 6,
        vehicle: 'Electric Car',
        price: 25.00,
        speed: 'Standard',
        capacity: 'Medium',
        distance: 'Up to 40 miles',
        image: 'https://img.freepik.com/premium-photo/close-up-small-car-with-green-white-stripe-generative-ai_902846-37886.jpg?w=740'
    }
];

const DeliveryServices = () => {
    const navigate = useNavigate();

    const handleSelect = (option) => {
        navigate('/delivery-form', { state: { selectedOption: option } });
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Select Delivery Option</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deliveryOptions.map(option => (
                    <div key={option.id} className="border rounded-lg shadow-lg overflow-hidden">
                        <img src={option.image} alt={option.vehicle} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{option.vehicle}</h3>
                            <p>Price: ${option.price.toFixed(2)}</p>
                            <p>Speed: {option.speed}</p>
                            <p>Capacity: {option.capacity}</p>
                            <p className='mb-4'>Distance: {option.distance}</p>
                            <button
                                onClick={() => handleSelect(option)}
                                className="mt-4 w-full bg-red-600 hover:bg-white hover:text-red-600 hover:border hover:border-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                REQUEST DELIVERY
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DeliveryServices;
