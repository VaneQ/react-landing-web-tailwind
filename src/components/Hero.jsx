import React from 'react'

const Hero = () => {
    return (
        <div className='text-pink-100'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='uppercase text-blue-800 font-bold p-3'>Component-Based</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>React.js</h1>
                <div>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold motion-safe:animate-bounce p-10'>A JavaScript library for building user interfaces</p>

                </div>

                <button className='bg-blue-800 w-[200px] rounded font-medium my-6 mx-auto py-2'>Get started</button>
            </div>
        </div>
    )
}

export default Hero