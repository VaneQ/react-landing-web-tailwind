import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
    return (
        <div className='w-full bg-pink-100 py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4 p-3' src={laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-blue-800 font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 text-blue-900 font-bold'>Manage Data Analytics Centrally</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Reprehenderit in hic optio sunt nisi
                        fugiat sed error obcaecati commodi ipsam facere minima voluptatum,
                        odio, ipsa eveniet fugit saepe voluptate tenetur? 
                    </p>
                    <button className='bg-blue-800 w-[200px] text-white rounded font-medium my-6 mx-auto py-2'>Get started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics