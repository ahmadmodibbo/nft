import React from 'react'

export default function Steps() {
  return (
    <div className='my-10 lg:px-6' data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <div className='my-4 lg:my-20'>
        <h1 className='oxanium text-[36px] lg:text-[64px] leading-[45px] font-[700] text-center text-[#F5FBF2] '>How it works</h1>
      </div>
      <div className='flex flex-col justify-center lg:justify-around lg:space-x-6 items-center lg:flex-row lg:items-start my-10'>
        {/* Step One Start */}
          <div className='flex flex-col items-center'>
            <div className='p-4 rounded-full bg-[#372839] w-[80px] h-[80px]'>
              <img className=' h-full w-full text-center  ' src="/icons/wallet.png" alt="" />
            </div>
            <h1 className='text-[#FFCE4E] worksans text-[24px] lg:text-[20px] leading-[28.15px] font-[600] my-2 '>Set Up Your Wallet</h1>
          </div>
        {/* Step One End */}
        {/* Divider  One Start */}
          <div className='w-[12px] h-[100px] my-4 lg:my-0 lg:mx-4'>
            <img className='h-full w-full lg:-rotate-90' src="/images/divider.png" alt="" />
          </div>
        {/* Divider One End */}
        {/* Step Two Start */}
          <div className='flex flex-col items-center'>
            <div className='p-4 rounded-full bg-[#372839] w-[80px] h-[80px]'>
              <img className=' h-full w-full text-center  ' src="/icons/collection.png" alt="" />
            </div>
            <h1 className='text-[#FFCE4E] worksans text-[24px] lg:text-[20px] leading-[28.15px] font-[600] my-2 '>Create Your Collection</h1>
          </div>
        {/* Step Two End */}
        {/* Divider Two Start */}
          <div className='w-[12px] h-[100px] my-4 lg:my-0 lg:mx-4' >
            <img className='h-full w-full lg:-rotate-90' src="/images/divider.png" alt="" />
          </div>
        {/* Divider TWo End */}
        {/* Step Three Start */}
          <div className='flex flex-col items-center'>
            <div className='p-4 rounded-full bg-[#372839] w-[80px] h-[80px]'>
              <img className=' h-full w-full text-center  ' src="/icons/add.png" alt="" />
            </div>
            <h1 className='text-[#FFCE4E] worksans text-[24px] lg:text-[20px] leading-[28.15px] font-[600] my-2 '>Add Your NFTs</h1>
          </div>
        {/* Step Three End */}
        {/* Divider Three Start */}
          <div className='w-[12px] h-[100px] my-4 lg:my-0 lg:mx-4'>
            <img className='h-full w-full lg:-rotate-90' src="/images/divider.png" alt="" />
          </div>
        {/* Divider Three End */}
        {/* Step Four Start */}
          <div className='flex flex-col items-center'>
            <div className='p-4 rounded-full bg-[#372839] w-[80px] h-[80px]'>
              <img className=' h-full w-full text-center  ' src="/icons/sell.png" alt="" />
            </div>
            <h1 className='text-[#FFCE4E] worksans text-[24px] lg:text-[20px] leading-[28.15px] font-[600] my-2 '>List Them For Sale</h1>
          </div>
        {/* Step Four End */}
        
      </div>
    </div>
  )
}
