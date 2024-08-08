import React from 'react';
import '../../App.css'
import { TbPackages } from "react-icons/tb";
import { FaTruck } from "react-icons/fa6";
import { PiWarehouseFill } from "react-icons/pi";

const About = () => {
  return (
    <div>
      <div className='flex flex-row justify-center items-center mb-10 mt-10 text-3xl'>
        <span className='text-red-600'>\\</span><h1 className='font-extrabold ml-2 mr-2 text-3xl'>About Us</h1><span className='text-red-600'>\\</span>
      </div>

      <p className='flex flex-row justify-center items-center mb-10 mt-10 text-2xl'>
                        Welcome to CentralHub Warehousing Solutions, your premier destination for comprehensive storage, delivery, and packaging services. Strategically located to serve businesses of all sizes, our state-of-the-art facility is equipped with the latest technology to ensure your goods are stored safely and efficiently. We pride ourselves on our exceptional customer service, providing tailored solutions to meet your unique needs. From secure storage options to reliable delivery services and expert packaging, CentralHub is committed to helping you streamline your logistics and enhance your operational efficiency. Trust us to handle your inventory with the utmost care and professionalism.                 
      </p>
      <p></p>

      <section className='grid grid-cols-2 justify-center items-center w-full gap-5 m-auto'>
        <div className='our-services'>
          <FaTruck className='h-56 w-72 flex items-center justify-center bg-slate-200 mr-3 p-3 text-red-600 object-cover'/>
          <div>
            <h2 className='font-bold text-lg'>TRANSPORT</h2>
            <p>Our transport services guarantee timely and secure delivery, utilizing a modern fleet and advanced tracking technology to ensure your goods reach their destination efficiently and in perfect condition.</p>
          </div>
        </div>

        <div className='our-services'>
          <TbPackages className='h-56 w-72 flex items-center justify-center bg-slate-200 mr-3 p-3 text-red-600 object-cover'/>
          <div>
            <h2 className='font-bold text-lg'>PACKAGING</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi pariatur ex accusamus dolorum, suscipit in itaque animi eos, eum, tempora provident exercitationem incidunt omnis. Natus similique velit facilis laborum esse.</p>
          </div>              
        </div>

        <div className='our-services'>
          <PiWarehouseFill className='h-56 w-72 flex items-center justify-center bg-slate-200 mr-3 p-3 text-red-600 object-cover'/>
          <div>
            <h2 className='font-bold text-lg'>STORAGE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi pariatur ex accusamus dolorum, suscipit in itaque animi eos, eum, tempora provident exercitationem incidunt omnis. Natus similique velit facilis laborum esse.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
