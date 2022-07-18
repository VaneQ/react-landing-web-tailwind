import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


export const PriceCards = () => {
    return (
      <div className='w-full py-[10rem] px-4 bg-pink-100'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200'>
                <img className='w-20 mx-auto mt-[-3rem] bg-pink-100' src={Single} alt="single" />
                <h2 className='text-2xl font-bold text-center py-8'>Single account</h2>
                <p className='text-center text-4xl font-bold'>$30/year</p>
                <div className='text-center font-medium'>
                   <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                   <p className='py-2 border-b mx-8'>1 Granted User</p>
                   <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                </div>
                <button className='bg-blue-600 w-[200px] rounded font-bold my-6 mx-auto py-2 text-pink-100'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-200'>
                <img className='w-20 mx-auto mt-[-3rem] bg-pink-100' src={Triple} alt="single" />
                <h2 className='text-2xl font-bold text-center py-8'>Triple account</h2>
                <p className='text-center text-4xl font-bold'>$80/year</p>
                <div className='text-center font-medium'>
                   <p className='py-2 border-b mx-8 mt-8'>2 TB Storage</p>
                   <p className='py-2 border-b mx-8'>3 Granted User</p>
                   <p className='py-2 border-b mx-8'>Send up to 6GB</p>
                </div>
                <button className='bg-blue-800 w-[200px] rounded font-bold my-6 mx-auto py-2 text-pink-100'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200'>
                <img className='w-20 mx-auto mt-[-3rem] bg-pink-100' src={Double} alt="single" />
                <h2 className='text-2xl font-bold text-center py-8'>Dobule account</h2>
                <p className='text-center text-4xl font-bold'>$60/year</p>
                <div className='text-center font-medium'>
                   <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                   <p className='py-2 border-b mx-8'>2 Granted User</p>
                   <p className='py-2 border-b mx-8'>Send up to 4GB</p>
                </div>
                <button className='bg-blue-600 w-[200px] rounded font-bold my-6 mx-auto py-2 text-pink-100'>Start Trial</button>
            </div>
            
        </div> 

      </div>
    )
}
