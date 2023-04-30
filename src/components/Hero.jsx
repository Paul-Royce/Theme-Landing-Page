import React from 'react'
import heroIMG from "../images/illustration-intro.png"
import Features from './Features'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full lg:w-5/12'>
        <img src={heroIMG} alt='hero image'  className=''/>
        <section className="text-center">
            <h1 className="font-bold text-2xl py-2 my-3 lg:my-0">
                Add your files in one secure location, accessible anywhere
            </h1>
            <p className="text-sm mb-4 lg:px-11">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with
              friends family, and co-workers.
            </p>
        </section>
        <button type='button' className="p-2 px-7 mt-5 lg:m-0 rounded-full transition duration-200 bg-fyloTwo hover:bg-fylohover">Get Started</button>
        <Features />
    </div>
  )
}

export default Hero