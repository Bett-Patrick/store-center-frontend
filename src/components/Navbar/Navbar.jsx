import React, { useState, useRef, useEffect } from 'react';
import { IoMdSearch } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from './DarkMode';
import '../../App.css';
import { MdWarehouse } from "react-icons/md";

const Navbar = ({ openModal }) => {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowModal(false);
            }
        }

        if (showModal) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal]);

    const handleAdminClick = () => {
        setShowModal(!showModal);
    };

    const appendModal = () => {
        if (showModal) {
            return (
                <div ref={modalRef} className="absolute right-0 mt-6 bg-white dark:bg-gray-800 border rounded shadow-lg shadow-black">
                    <button className="flex px-4 py-2 text-sm w-full border-b-2 dark:text-white font-medium dark:hover:text-red-600 text-black hover:text-red-600 focus:text-red-600 dark:focus:text-red-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">Register</button>
                    <button className="flex px-4 py-2 text-sm w-full border-b-2 dark:text-white font-medium dark:hover:text-red-600 text-black hover:text-red-600 focus:text-red-600 dark:focus:text-red-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">Login</button>
                    <NavLink to='/dashboard' className="flex px-4 py-2 text-sm w-full border-b-2 dark:text-white font-medium dark:hover:text-red-600 text-black hover:text-red-600 dark:focus:text-red-600 focus:text-red-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">Dashboard</NavLink>
                    <button className="flex px-4 py-2 text-sm w-full border-b-2 dark:text-white font-medium dark:hover:text-red-600 text-black hover:text-red-600 focus:text-red-600 dark:focus:text-red-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">Add Storage Unit</button>
                    <button className="flex px-4 py-2 text-sm w-full border-b-2 dark:text-white font-medium dark:hover:text-red-600 text-black hover:text-red-600 focus:text-red-600 dark:focus:text-red-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">Delete Storage Unit</button>
                    <button onClick={openModal} className="flex px-4 py-2 text-sm w-full border-b-2 dark:text-white font-medium dark:hover:text-red-600 text-black hover:text-red-600 focus:text-red-600 dark:focus:text-red-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">Delivery Services</button>
                    <button className="flex px-4 py-2 text-sm w-full border-b-2 dark:text-white font-medium dark:hover:text-red-600 text-black hover:text-red-600 focus:text-red-600 dark:focus:text-red-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">Add Delivery Service</button>
                    <button className="flex px-4 py-2 text-sm w-full border-b-2 dark:text-white font-medium dark:hover:text-red-600 text-black hover:text-red-600 focus:text-red-600 dark:focus:text-red-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">Delete Delivery Service</button>
                </div>
            );
        }
    };

    return (
        <div className='flex justify-between items-center bg-white dark:bg-gray-900 dark:text-white h-28 pl-5 pr-5 bg-gradient-to-l from-red-400 to-white-500'>
            <div className='flex flex-row justify-center items-center bg-white ml-2 p-1 '>
                <MdWarehouse className='h-24 w-20 text-red-600' />
                <div className='text-slate-900 font-extrabold h-fit'>
                    <h1 className='p-0 block text-lg'>Cargo</h1>
                    <h1 className='p-0 block text-lg'>Cove</h1>
                    <h1 className='p-0 block text-lg'>Warehouse</h1>
                </div>   
            </div>
            
            
            <NavLink
                className={({ isActive }) =>
                    `hover:text-gray-700 dark:hover:text-gray-300 ${
                        isActive ? 'text-red-600 bg-white rounded-sm p-1' : 'text-black dark:text-white'
                    }`
                }
                to='/'
            >
                Home
        </NavLink>

        <NavLink 
            className={({ isActive }) =>
            `hover:text-gray-700 dark:hover:text-gray-300 ${
              isActive ? 'text-red-600 bg-white rounded-sm p-1' : 'text-black dark:text-white'
            }`
          }
            to = '/#stores'>
                Stores
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    `hover:text-gray-700 dark:hover:text-gray-300 ${
                        isActive ? 'text-red-600 bg-white rounded-sm p-1' : 'text-black dark:text-white'
                    }`
                }
                to='/blogs'
            >
                Blogs
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    `hover:text-gray-700 dark:hover:text-gray-300 ${
                        isActive ? 'text-red-600 bg-white rounded-sm p-1' : 'text-black dark:text-white'
                    }`
                }
                to='/about'
            >
                About
            </NavLink>

            {/* Search Bar section */}
            <div className='flex flex-row justify-center items-center border-red-600 border-2 rounded-lg p-1 dark:bg-white dark:text-black'>
                <input type="text" placeholder='Search Units' className="h-10 outline-none rounded-full p-2" />
                <IoMdSearch className='text-3xl ml-2 ' />
            </div>

            {/* Login and Signup */}
            <NavLink
                className={({ isActive }) =>
                    `hover:bg-white hover:rounded hover:px-2 dark:hover:text-gray-300 ${
                        isActive ? 'text-red-600 bg-white rounded-sm p-1' : 'text-black dark:text-white'
                    }` 
                }
                to='/login'
            >
                Login
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    `hover:bg-white hover:rounded hover:px-2 dark:hover:text-gray-300 ${
                        isActive ? 'text-red-600 bg-white rounded-sm p-1' : 'text-black dark:text-white'
                    }`
                }
                to='/signup'
            >
                Signup
            </NavLink>

            {/* Cart */}
            {/* <button className='relative p-3'>
                <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400' />
                <div className='w-4 h-4 text-white absolute top-0 right-0 flex items-center justify-center text-xs'></div>
            </button> */}

            <NavLink
                className={({ isActive }) =>
                    `hover:bg-white hover:rounded hover:px-2 dark:hover:text-gray-300 ${
                        isActive ? 'text-red-600 bg-white rounded-sm p-1' : 'text-black dark:text-white'
                    }`
                }
                to='/MyUnits'
            >
                Dashboard
            </NavLink>

            {/* Admin button */}
            <div>
                {/* Dark Mode */}
                <DarkMode />
                <div className='relative mb-9'>
                    <button onClick={handleAdminClick} className='bg-red-600 px-4 mt-8 text-white font-bold float-end'>Admin</button>
                </div>
                {appendModal()}
            </div>
        </div>
    );
};

export default Navbar;
