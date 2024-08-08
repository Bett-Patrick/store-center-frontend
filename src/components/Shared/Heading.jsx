import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
      <div className="flex justify-center items-center"><span className='text-red-600 text-3xl mr-2'>\\</span><h1 className="text-3xl font-bold lg:text-4xl">{title}</h1><span className='text-red-600 text-3xl ml-2'>\\</span></div>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
  );
};

export default Heading;
