import React from 'react'
import { FaFacebookSquare, 
         FaDribbbleSquare,
         FaTwitterSquare,
         FaInstagramSquare,
         FaGithubSquare } from 'react-icons/fa'
         
export const Footer = () => {
    return (
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8'>
        <div>
          <h1 className='w-full text-3xl font-bold text-blue-800 '>REACT.JS</h1>
          <p className='text-pink-100 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nostrum ab labore est modi ipsam, illum assumenda atque beatae, pariatur aliquam voluptate impedit molestiae sapiente adipisci expedita odit nemo cupiditate?</p>
          <div className='flex justify-between md:w-[75%] my-6'>
            <FaInstagramSquare size={30}/>
            <FaTwitterSquare size={30}/>
            <FaFacebookSquare size={30}/>
            <FaDribbbleSquare size={30}/>
            <FaGithubSquare size={30}/>
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
          <div className='text-pink-100'>
            <h6 className='font-medium'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'>Analytics</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Questions</li>
            </ul>
          </div>
          <div className='text-pink-100'>
            <h6 className='font-medium'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'>Analytics</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Questions</li>
            </ul>
          </div>
          <div className='text-pink-100'>
            <h6 className='font-medium'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'>Analytics</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Questions</li>
            </ul>
          </div>
        </div>
      </div>

    )
}
