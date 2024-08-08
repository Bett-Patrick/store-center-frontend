// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import '../../../App.css'


// const Stores = () => {
//   return (
//     <section className='flex flex-row w-11/12 m-auto justify-center items-center gap-10 h-2/3'>
        
//         <div className='flex flex-col justify-center items-center bg-slate-100 rounded-md dark:text-white dark:border-white border dark:bg-black w-1/3 h-full'>
//           <div className='grid p-3 overflow-y-scroll no-scrollbar'>
//             <img src="https://www.kangarooselfstorage.co.uk/wp-content/uploads/2018/03/KANGAROO-73-scaled.jpg" alt="unit image/icon" />
//             <strong>Size</strong>
//             <p><strong>25 </strong>SQ FT</p>
//             <strong>Dimensions:</strong>
//             <span className='mb-3'>5'x5'</span>

//             <strong>Available Units</strong>
//             <ul className='flex flex-row'>
//               <li>A101, </li>
//               <li>A103, </li>
//               <li>A104, </li>
//             </ul>

//             <strong>Description:</strong>
//             <p>Compact, efficient, climate-controlled storage unit with secure access, ideal for small inventory or equipment.</p>

//             <strong>Available Units:</strong>
//             <div></div>
//             <strong>PRICE:</strong>
//             <p>Kshs. 5,000 per Month</p>
//           </div>
//           <NavLink to="BookingPage" className='bg-red-600 text-white m-auto mb-3 font-bold p-3 mt-3'>BOOK NOW</NavLink>
//         </div>

//         <div className='flex flex-col justify-center items-center bg-slate-100 rounded-md dark:text-white dark:border-white border dark:bg-black w-1/3 h-full'>
//           <div className='grid p-3 overflow-y-scroll no-scrollbar'>
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTLVMpLdAJ__AMn83o4_iJ53q49dPwm9n-g&usqp=CAU" alt="unit image/icon" />
//             <strong>Size</strong>
//             <p><strong>40 </strong>SQ FT</p>
//             <strong>Dimensions:</strong>
//             <span className='mb-3'>5'x8'</span>
//             <strong>Description:</strong>
//             <p>Compact 40 sq ft storage unit: efficient, organized, stackable shelves, secure, versatile, ideal for small inventory.</p>
//             <strong>PRICE:</strong>
//             <p>Kshs. 8,000 per Month</p>
//           </div>
//           <NavLink to="BookingPage" className='bg-red-600 text-white m-auto mb-3 font-bold p-3 mt-3'>BOOK NOW</NavLink>
//         </div>

//         <div className='flex flex-col justify-center items-center bg-slate-100 rounded-md dark:text-white dark:border-white border dark:bg-black w-1/3 h-full'>
//           <div className='grid p-3 overflow-y-scroll no-scrollbar'>
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4MaxqHSl3YF7uNloKGuDDV-SB0UZEOe2nQ&usqp=CAU" alt="unit image/icon" />
//             <strong>Size</strong>
//             <p><strong>30 </strong>SQ FT</p>
//             <strong>Dimensions:</strong>
//             <span className='mb-3'>5'x6'</span>
//             <strong>Description:</strong>
//             <p>Compact, efficient, climate-controlled storage unit with secure access, ideal for small inventory or equipment.</p>
//             <strong>PRICE:</strong>
//             <p>Kshs. 6,500 per Month</p>
//           </div>
//           <NavLink to="BookingPage" className='bg-red-600 text-white m-auto mb-3 font-bold p-3 mt-3'>BOOK NOW</NavLink>
//         </div>

//         <div className='flex flex-col justify-center items-center bg-slate-100 rounded-md dark:text-white dark:border-white border dark:bg-black w-1/3 h-full'>
//           <div className='grid p-3 overflow-y-scroll no-scrollbar'>
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQt28ZmTKO6_6_UoNXWnaTcm2pmF59QL0Vg&usqp=CAU" alt="unit image/icon" />
//             <strong>Size</strong>
//             <p><strong>50 </strong>SQ FT</p>
//             <strong>Dimensions:</strong>
//             <span className='mb-3'>5'x10'</span>
//             <strong>Description:</strong>
//             <p>
// Efficient 50 sq ft storage unit: spacious, adjustable shelving, secure, versatile, optimal for inventory.</p>
//             <strong>PRICE:</strong>
//             <p>Kshs. 10,000 per Month</p>
//           </div>
//           <NavLink to="BookingPage" className='bg-red-600 text-white m-auto mb-3 font-bold p-3 mt-3'>BOOK NOW</NavLink>
//         </div>

        
//     </section>        
//   )
// }

// export default Stores



import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Small = ({ userId }) => {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUnits = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/units?userId=${userId}`);
      const smallUnits = response.data.filter(unit => unit.storage_slot.size === 'small');
      setUnits(smallUnits);
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
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Small Units</h1>
      <button
        onClick={fetchUnits}
        className="bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-red-600 focus:outline-none"
      >
        View All Small Units
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
            <NavLink
              to="BookingPage" 
              onClick={() => handleBookNow(unit.id)}
              // className='bg-red-600 text-white m-auto mb-3 font-bold p-3 mt-3'
              className="bg-red-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-600 focus:outline-none mt-2"
            >
              Book Now
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Small;
{/* <NavLink to="BookingPage" className='bg-red-600 text-white m-auto mb-3 font-bold p-3 mt-3'>BOOK NOW</NavLink> */}