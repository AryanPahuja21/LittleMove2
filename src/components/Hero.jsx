import React from 'react'

const Hero = () => {
  return (
    <div className='bg-primary overflow-hidden'>
      <main className='grid grid-cols-1 lg:grid-cols-2 md:my-8 gap-5 p-14 md:p-24 items-center'>
        <div>
            <h1 className='text-4xl md:text-6xl font-semibold text-white md:mr-10'>
                Revolutionize Your School Transportation with LittleMove!
            </h1>
            <p className='text-xl md:text-3xl text-gray-600 mt-10 font-bold md:mr-10'>
                Launching nationwide on April 1st! Sign up for your FREE trial and experience a smoother, greener school year! Limited spots available, register today!
            </p>
            <div className='mt-8 md:mt-16'>
                <button className='bg-black text-white px-8 py-3 rounded-lg font-bold'>
                Start your free trial now
                </button>
            </div>
        </div>
        <div>
            <img src="/heroimg.png" className='w-64 mx-auto lg:mr-14 z-20' />
        </div>
      </main>
    </div>
  )
}

export default Hero
