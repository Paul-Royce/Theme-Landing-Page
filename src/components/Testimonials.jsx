import React from 'react'
import Quotes from "../images/bg-quotes.png"
import SingleTestimonial from './SingleTestimonial'
import SatishImg from "../images/profile-1.jpg"
import BruceImg from "../images/profile-2.jpg"
import IvaImg from "../images/profile-3.jpg"

const Testimonials = () => {
    const testimonialData = {
        description: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        avatarNames: ["Satish Patel", "Bruce McKenzie", "Iva Boic"]
    }

  return (
    <div className="mt-24 relative flex flex-col justify-center lg:flex-row">
        <img src={Quotes} alt='quotes' className="absolute -left-3 -top-8 lg:left-24 lg:-top-9 " />
        <div className="flex flex-col gap-8 lg:flex-row lg:w-10/12">
           <SingleTestimonial
              description={testimonialData.description}
              avatarName={testimonialData.avatarNames[0]}
              avatarImg={SatishImg}
           />
           <SingleTestimonial
              description={testimonialData.description}
              avatarName={testimonialData.avatarNames[1]}
              avatarImg={BruceImg}
           />
           <SingleTestimonial
              description={testimonialData.description}
              avatarName={testimonialData.avatarNames[2]}
              avatarImg={IvaImg}
           />
        </div>
    </div>
  )
}

export default Testimonials