import React from 'react'

const NewsLetter = () => {
    return (
        <div className='w-full py-16 text-pink-100 px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-5xl sm:text-3xl text-2xl font-bold'>Wanna know about the new updates that are on the way?</h1>
                    <p>Subscribe to our montly newsletter</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-sm text-blue-800' type="email" placeholder='Enter your email'/>
                        <button className='lg:ml-4 md:ml-4 ml-1 bg-blue-800 w-[200px] text-white rounded font-medium my-6 px-6 mx-auto py-3'>Subscribe</button>
                    </div>
                </div>
                <p>We are always working on new content four our beloved comunity</p>
            </div>
            
        </div>
    )
}

export default NewsLetter