import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../App.css'


const Stores = () => {
  return (
    <section className='h-full w-9/10 m-auto'>
        <div className="flex items-center bg-white rounded-md border-2 border-black dark:bg-black dark:border-white shadow-bottom-right-light dark:shadow-bottom-right-dark w-full h-450 mb-10">
          <div className="w-1/3 h-full">
            <img src="https://i.pinimg.com/564x/c6/8c/1e/c68c1ef5bd6158a801a09c73c5e13d02.jpg" alt="unit image/icon" className="h-full w-full object-cover rounded-l-md" />
          </div>
          <div className='grid p-3 w-2/3'>
            <strong className='flex font-extrabold text-3xl text-white mb-3 m-auto bg-slate-600 shadow-bottom-right-light dark:shadow-bottom-right-dark rounded-md w-1/3 justify-center items-center'>Small Units</strong>
            <p><strong>25 to 75 </strong>SQ FT</p>
            <strong>Common unit sizes:</strong>
            <span className='mb-3'>5'x5', 5'x10', 5'x15'</span>
            <strong>Looks like:</strong>
            <p className='mb-1'>Anywhere from a hall closset or half bathroom to a small bedroom depending on the storage unit size.</p>
            <p className='mb-3'>A spacious, well-lit area with high ceilings, typically featuring industrial-grade shelving units and ample floor space. The unit may have a roll-up door for easy access and ventilation.</p>
            <strong>What will fit:</strong>
            <p className='line-clamp-2'>Small items, like bags, suitcases and boxes to the contents of a small-one-bedroom appartment.</p>
            <p>In a 25 to 75 sq feet unit, you can fit several small to medium-sized boxes, seasonal decorations, or sports equipment to the contents of a small-one-bedroom appartment. It’s perfect for storing items that clutter your home but aren't needed daily.</p>
            <NavLink to="small" className='bg-red-600 text-white m-auto mb-3 font-bold p-3 mt-3'>EXPLORE MORE</NavLink>
          </div>
        </div>

        <div className="flex items-center bg-white rounded-md border-2 border-black dark:bg-black dark:border-white shadow-bottom-right-light dark:shadow-bottom-right-dark w-full h-450 mb-10">
          <div className="w-1/3 h-full">
            <img src="https://i.pinimg.com/564x/c6/8c/1e/c68c1ef5bd6158a801a09c73c5e13d02.jpg" alt="unit image/icon" className="h-full w-full object-cover rounded-l-md" />
          </div>
          <div className='grid p-3 w-2/3'>
            <strong className='flex font-extrabold text-3xl text-white mb-3 m-auto bg-slate-600 shadow-bottom-right-light dark:shadow-bottom-right-dark rounded-md w-1/3 justify-center items-center'>Medium Units</strong>
            <p><strong>75 to 150 </strong>SQ FT</p>
            <strong>Common unit sizes:</strong>
            <span className='mb-3'>10'x10', 10'x15' </span>
            <strong>Looks like:</strong>
            <p className='mb-3'>The interior is well-lit, ensuring easy access and organization of stored items. Clean, concrete floors provide a solid foundation for shelving units and pallets, maximizing the usable space within the unit.</p>
            <strong>What will fit:</strong>
            <p>For business use, it can store a variety of office equipment, such as desks, chairs, filing cabinets, and inventory supplies, making it a versatile option for small businesses needing extra space for operational materials..</p>
            <NavLink to="medium" className='bg-red-600 text-white m-auto mb-3 font-bold p-3 mt-3'>EXPLORE MORE</NavLink>
          </div>
        </div>

        <div className="flex items-center bg-white rounded-md border-2 border-black dark:bg-black dark:border-white shadow-bottom-right-light dark:shadow-bottom-right-dark w-full h-450 mb-10">
          <div className="w-1/3 h-full">
            <img src="https://i.pinimg.com/564x/c6/8c/1e/c68c1ef5bd6158a801a09c73c5e13d02.jpg" alt="unit image/icon" className="h-full w-full object-cover rounded-l-md" />
          </div>
          <div className='grid p-3 w-2/3'>
            <strong className='flex font-extrabold text-3xl text-white mb-3 m-auto bg-slate-600 shadow-bottom-right-light dark:shadow-bottom-right-dark rounded-md w-1/3 justify-center items-center'>Large Units</strong>
            <p><strong>150 to 300 </strong>SQ FT</p>
            <strong>Common unit sizes:</strong>
            <span className='mb-3'>10'x15', 10'x20', 10'x30'</span>
            <strong>Looks like:</strong>
            <p className='mb-3'>A spacious, well-lit area with high ceilings, typically featuring industrial-grade shelving units and ample floor space. The unit may have a roll-up door for easy access and ventilation.</p>
            <strong>What will fit:</strong>
            <p>Business Inventory: Ideal for storing excess inventory, equipment, and supplies for small businesses, online sellers, or seasonal items like holiday decorations..</p>
            <NavLink to="large" className='bg-red-600 text-white m-auto mb-3 font-bold p-3 mt-3'>EXPLORE MORE</NavLink>
          </div>
        </div>
    </section>        
  )
}

export default Stores