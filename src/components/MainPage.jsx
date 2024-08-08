import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TbPackages } from "react-icons/tb";
import { FaTruck } from "react-icons/fa6";
import { PiWarehouseFill } from "react-icons/pi";
import '../App.css';
import Stores from './Stores/Stores';
import Blogs from './Blogs/Blogs';
import Partners from './Partners/Partners';

const MainPage = () => {
  const navigate = useNavigate();

  const goToDeliveryOptions = () => {
    navigate('/delivery-services');
  };

  return (
    <div className='grid w-full h-full justify-center items-center font-arial dark:bg-black dark:text-white'>
      <div className='img-container'>
        <img src="https://i.pinimg.com/564x/c6/8c/1e/c68c1ef5bd6158a801a09c73c5e13d02.jpg" alt="warehouse.jpg" className='warehouse-img' />
      </div>

      <div
        className='flex flex-col justify-center items-center text-4xl mb-10 leading-relaxed'
        // style={{
        //   backgroundImage: "url('https://aquantuo.com/theme/latest-assets/images/services/warehouse-service1.png')",
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   backgroundRepeat: 'no-repeat',
        // }}
      >
        <h1 className='font-dancingScript text-4xl'>We Offer Complete</h1>
        <h1 className='font-bold text-red-600 text-6xl'>Warehouse Services</h1>
        <h2 className='font-bold text-white bg-red-600 text-xl italic pl-2 pr-2'>To Take Care Of All Your Needs</h2>
      </div>
      
      <div className='flex flex-row justify-center items-center mb-5 text-3xl'>
        <span className='text-red-600'>\\</span><h1 className='font-extrabold ml-2 mr-2 text-3xl'>EXPLORE OUR STORAGE UNITS</h1><span className='text-red-600'>\\</span>
      </div>

      {/* Stores Section */}
      <Stores />

      {/* Our Services Section */}
      <div className='flex flex-row justify-center items-center mb-10 mt-10 text-3xl'>
        <span className='text-red-600'>\\</span><h1 className='font-extrabold ml-2 mr-2 text-3xl'>OUR SERVICES</h1><span className='text-red-600'>\\</span>
      </div>

      <section className='grid grid-cols-2 justify-center items-center w-full gap-5 m-auto mb-10'>
        <div className='our-services'>
          <TbPackages className='h-56 w-72 flex items-center justify-center bg-slate-200 mr-3 p-3 text-red-600 object-cover' />
          <div>
            <h2 className='font-bold text-lg'>PACKAGING</h2>
            <p>Our packaging section offers custom solutions, including eco-friendly materials, tailored packaging designs, and protective wraps. We ensure your products are securely packed to withstand transit, enhancing both safety and presentation for your shipments.</p>
          </div>
        </div>

        <div className='our-services'>
          <PiWarehouseFill className='h-56 w-72 flex items-center justify-center bg-slate-200 mr-3 p-3 text-red-600 object-cover' />
          <div>
            <h2 className='font-bold text-lg'>STORAGE</h2>
            <p>Our storage solutions cater to diverse needs: climate-controlled units for sensitive items like electronics, bulk storage for large quantities of goods, and specialized racks for secure and organized handling of pallets and oversized products.</p>
          </div>
        </div>

        <div className='our-services'>
          <button onClick={goToDeliveryOptions} className='h-56 w-72 flex items-center justify-center bg-red-600 text-white text-lg font-bold p-3 rounded'>
            Delivery Services
          </button>
          <div>
            <h2 className='font-bold text-lg'>DELIVERY SERVICES</h2>
            <p>Our delivery services offer reliable and efficient solutions, ensuring your packages are delivered safely and on time.</p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <Blogs />

      {/* Partners Section */}
      <Partners />
    </div>
  );
}

export default MainPage;
