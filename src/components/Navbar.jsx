import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenuFold } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='text-pink-100 flex justify-between h-24 max-w-[1240px] mx-auto px-4'>
            <h1 className='w-full text-3xl font-bold text-blue-800 '>REACT.JS</h1>

            <ul className='hidden md:flex font-bold '>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>

            <div className='block md:hidden' onClick={ handleNav }>
                {!nav ? <AiOutlineMenuFold  size={25}  /> :
                 <AiOutlineClose size={25}  /> }
            </div>

            <div className={ nav ? 'fixed left-0 top-0 w-[60%] border-r-gray-900 h-full' : 'fixed left-[-100%] top-0 w-[60%] ease-in-out duration-500 border-r-gray-900 h-full' }>
                <ul className='pt-24 uppercase bg-transparent p-4'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>Company</li>
                    <li className='p-4'>Resources</li>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Contact</li> 
                </ul>
            </div>
        </div>
    )
}

export default Navbar;