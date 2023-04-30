import React from 'react'

const SingleTestimonial = ({description, avatarName, avatarImg}) => {
  return (
    <div className='p-8 rounded bg-fylotestimonials z-20'>  {/* move to singletestimonial component when completed */}
    <p>
        {description}
        
    </p>
    <div className='flex items-center gap-x-3 mt-4'>
        <img src={avatarImg} alt="avatar" className='rounded-full w-10' />
        <div>
            <h5>{avatarName}</h5>
            <p>Founder & CEO, Huddle</p>
        </div>
    </div>
</div>
  )
}

export default SingleTestimonial