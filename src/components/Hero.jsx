import React from 'react'

const Hero = () => {
  return (
    <>
      <main className='grid grid-cols-1 md:grid-cols-2 m-24'>
        <div>
            <h1 className='text-6xl font-semibold text-primary mr-10'>
                Revolutionize Your School Transportation with LittleMove!
            </h1>
            <p className='text-3xl text-gray-600 mt-10 font-bold mr-10'>
                Launching nationwide on April 1st! Sign up for your FREE trial and experience a smoother, greener school year! Limited spots available, register today!
            </p>
            <div className='mt-16'>
                <button className='bg-black text-white px-8 py-3 rounded-lg font-bold'>
                Start your free trial now
                </button>
            </div>
        </div>
        <div>
            <img src="/heroimg.jpeg" alt="" />
        </div>
      </main>
    </>
  )
}

export default Hero
