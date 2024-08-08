import React from 'react';
import { FaFacebook, FaLinkedin, FaLocationArrow, FaMobileAlt, FaInstagram } from 'react-icons/fa';

const FooterLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About",
        link: "/about",
    },
    {
        title: "Contact",
        link: "/contact",
    },
    {
        title: "Blog",
        link: "/blog",
    },
]

const Footer = () => {
    return (
        <div className='dark:bg-white dark:text-black bg-black text-white mt-5'>
            
                <div className="grid md:grid-cols-3 pb-2 pt-2">
                    {/* company details  */}
                    <div className='py-8 px-4 dark:text-black text-white'>
                        <a
                            href="#"
                            className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
                        >
                            Store Center
                        </a>

                        <p className='lg:pr-24 pt-3'>
                        Store Center is a storage facility that helps users to store either personal belongings or business goods in a secure location.                         </p>
                        <p className='mt-4'>
                            Made with 💖 by The Gladiators
                        </p>
                        <a
                            href="https://www.youtube.com"
                            target='_blank'
                            className='inline-block bg-primary/90 py-2 px-4 mt-4 text-sm rounded-full'
                        >
                            Visit our Youtube Channel
                        </a>
                    </div>

                    {/* Footer links  */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index} >
                                        <a
                                            href={data.link}
                                            className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black-400 duration-300'
                                        >
                                            {data.title}
                                        </a>

                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* second col links  */}

                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>
                                Quick Links
                            </h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index} >
                                        <a
                                            href={data.link}
                                            className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black-400 duration-300'
                                        >
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Address  */}
                        <div className='py-8 px-4 col-span-2 sm:col-auto'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>

                            <div>
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Moringa School</p>
                                </div>
                                <div className="flex items-center gap-3 mt-6">
                                    <FaMobileAlt />
                                    <p>+254712345678</p>
                                </div>

                                {/* social links  */}
                                <div className='flex items-center gap-3 mt-6'>
                                    <a href="#">
                                        <FaInstagram className="text-3xl hover:text-primary duration-300" />
                                    </a>
                                    <a href="#">
                                        <FaFacebook className="text-3xl hover:text-primary duration-300" />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Footer;
