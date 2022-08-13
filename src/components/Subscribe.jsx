import React from 'react'

export default function Subscribe() {
  return (
    <div className='px-2 my-12' data-aos="fade-right" data-aos-duration="2000">
        <div className='my-7'>
            <h1 className='oxanium text-center text-[36px] lg:text-[64px] leading-[45px] lg:leading-[130px] font-[700] text-[#F5FBF2] '>Ready for Next NFT Drop?</h1>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-y-5'>
            <input className='w-[300px] h-[44px] lg:h-[70px] bg-[#1c121f] text-[#A48EA9] text-[24px] leading-[35.45px] font-[400] worksans border-[.6px] border-[#E7B226] px-2 ' type="text" placeholder='info@mail.com' />
            <button className=' worksans bg-[#E7B226] h-[44px] lg:h-[70px] px-12 text-[24px] leading-[35.45px] font-[600] text-[#251928] transform hover:scale-110 ' disabled="disabled">Subcribe</button>
        </div>
    </div>
  )
}
