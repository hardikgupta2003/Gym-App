import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'
import '../index.css'

const HeroBanner = () => {
  return (
    <div className=' xl:mt-[212px] md:mt-[212px] sm:ml-[50px] relative p-[20px]'>
        <div className="text-orangee font-semibold text-[26px]">
            Fitness Club
        </div>
        <div className="font-bold lg:text-[44px] sm:text-[40px] mb-[23px] mt-[30px]">
        Sweat, Smile <br />
         And Repeat
        </div>
        <div className=" text-[22px] leading-[35px] ">
        Check out the most effective exercises personalized to you
        </div>
        <div className="">
            <a href="#exercise" className='mt-[45px] w-[220px]  flex text-center bg-orangee p-[14px] text-[22px] text-white rounded-[4px]'>Explore Exercises</a>
        </div>
        <div className="font-semibold text-orangee opacity-[0.1] block text-[200px]">Exercise</div>
        <img src={HeroBannerImage} alt="HeroBannerImage" className='HeroBannerImage'/>
    </div>
  )
}

export default HeroBanner