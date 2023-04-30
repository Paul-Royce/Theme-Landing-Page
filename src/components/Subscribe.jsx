import React from 'react'

const Subscribe = () => {
  return (
    <div id="subscribe" className="flex flex-col items-center text-center bg-fyloSignUp gap-4 p-5 rounded absolute w-11/12 -top-[50%] md:w-11/12 lg:w-6/12 md:p-10 md:-top-28">
        <h2 className="text-bold text-2xl md:text-3xl">Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
          questions, our support team would be happy to help you.
        </p>
        <div className="flex flex-col gap-10 md:flex-row">
          <input type="email" placeholder="email@example.com" className="rounded-full pl-4 w-[19rem] h-12 md:w-96 text-black" />
          <button className="rounded-full transition duration-200 bg-fyloTwo hover:bg-fylohover p-3">Get Started For Free</button>
        </div>
    </div>
  )
}

export default Subscribe;