import React from 'react'
import Nav from './Nav'

export default function HeroSection() {
  return (
    <div className="">
      <div>
        <Nav/>
      </div>
      <div className='lg:grid lg:grid-cols-2 lg:h-screen'>
        <div className='background bg-cover bg-center object-cover items-center pt-[46px] pl-[16px] lg:pl-[56px] pr-[17px] lg:pt-32'>
          <div className='lg:pt-28 flex justify-center' data-aos="fade-right" data-aos-duration="2000">
            <h1 className='oxanium text-[38.76px] lg:text-[70px] leading-[62px] lg:leading-[78px] font-[700] text-center lg:text-left text-[#F5FBF2]'>Explore, Buy and Sell the <span className='text-[#FFCE4E]'>Best NFTs!</span></h1>
          </div>
          {/* Hero Section Buttons Start */}
            <div className='flex justify-center items-center lg:justify-start space-x-4 lg:space-x-12 mt-[46px] lg:mt-[30px]'  data-aos="fade-right" data-aos-duration="4000">
              <div className=''>
                <a className=' border-[1px] border-[#FFCE4E] py-[16px] px-[39px] worksans font-[600] text-[18px] lg:text-[28px] leading-[21.11px] lg:leading-[36px] tracking-wide bg-[#FFCE4E] text-[#16091B] tansform hover:scale-110'>Explore</a>
                
              </div>
              <div className=''>
                <a className=' text-[#FFCE4E] border-[1px] border-[#FFCE4E] py-[16px] px-[44px] worksans font-[600] text-[18px] lg:text-[28px] leading-[21.11px] lg:leading-[36px] tarcking-wide bg-[#594846] '>Create</a>
              </div>
            </div>
          {/* Hero Section Buttons End */}
          {/* Stats Section Start */}
            <div className='hidden lg:flex mt-[50px] mr-[20px] mb-[10px]  top-45 justify-around py-3 px-1 text-[#F5FBF2]'  data-aos="fade-left" data-aos-duration="2000">
              <div className='text-center'>
                <h1 className='oxanium text-[36px] leading-[45px] font-[700]'>32k+</h1>
                <span className='text-[16px] leading-[35.45px] text-[#9B9E9A]'>Artwork</span>
              </div>
              <div className='text-center'>
                <h1 className='oxanium text-[36px] leading-[45px] font-[700]'>20k+</h1>
                <span className='text-[16px] leading-[35.45px] text-[#9B9E9A]'>Auctions</span>
              </div>
              <div className='text-center'>
                <h1 className='oxanium text-[36px] leading-[45px] font-[700]'>12k+</h1>
                <span className='text-[16px] leading-[35.45px] text-[#9B9E9A]'>Creators</span>
              </div>
            </div>
          {/* Stats Section End */}
        </div>
        <div className='bg-[#594846] lg:bg-gradient-to-br bg-opacity-60 from-[#332a35] to-[#5b3f3f] grid place-content-center pt-12 lg:pt-32 lg:pr-32 pb-5 lg:pb-2' data-aos="fade-left" data-aos-duration="1500">
          {/* Card Start */}
            <div className='h-[370px] lg:h-[458px] w-[282px] lg:w-[458px] bg-white'>
              {/* Card Top Section Start */}
                <div className='h-[300px] lg:h-[370px] w-[282px] lg:w-[458px] relative overflow-hidden'>
                  {/* Top Writing Start */}
                    <div className='absolute oxanium flex justify-between items-center px-2 top-7 left-5 z-20 w-[247px] lg:w-[412px] h-[73px] lg:h-[80px] bg-gradient-to-r from-[#d83b95] to-[#FAFAFA]/90 rounded-[5px]'>
                      <div className='text-[#E4DEE7]'>
                        <h1 className='text-[16px] lg:text-[18px] leading-[20px] lg:leading-[22.5px] font-[500] pb-[5px]'>Current bid</h1>
                        <h1 className='text-[22px] lg:text-[32px] leading-[27.5px] lg:leading-[40px] font-[700]'>0.99 ETH</h1>
                      </div>
                      <div className='text-[#FFFFFF] text-center'>
                        <h1 className='text-[16px] lg:text-[18px] leading-[20px] lg:leading-[22.5px]  pb-[5px]'>Ends in</h1>
                        <h1 className='text-[22px] lg:text-[32px] leading-[27.5px] lg:leading-[40px] font-[700]'>25 hrs</h1>
                      </div>
                    </div>
                  {/* Top Writing End */}
                  {/* Card Background Start */}
                    <div className='h-[300px] lg:h-[370px] w-[282px] lg:w-[458px] overflow-hidden relative object-cover cardbg'>
                      {/* Card fancy Start */}
                        <img className='absolute top-5 lg:w-32' src="/images/cardfancy.svg" alt="" />
                        <img className='absolute top-3 left-20 lg:w-32' src="/images/cardfancy.svg" alt="" />
                        <img className='absolute top-3 right-16 lg:w-32' src="/images/cardfancy.svg" alt="" />
                        <img className='absolute top-10 right-16 lg:w-32' src="/images/cardfancy2.svg" alt="" />
                        <img className='absolute -bottom-16 right-0 lg:w-32' src="/images/cardfancy.svg" alt="" />
                        <img className='absolute bottom-16 lg:w-32' src="/images/cardfancy.svg" alt="" />
                        <img className='absolute top-[190px] lg:w-32' src="/images/cardfancy.svg" alt="" />
                        <img className='absolute top-[147px] right-0 lg:w-32' src="/images/cardfancy.svg" alt="" />
                        <img className='absolute top-[180px] right-20 lg:w-32' src="/images/cardfancy.svg" alt="" />
                      {/* Card Fancy End */}
                    </div>
                  {/* Card Background End */} 
                </div>
              {/* Card Top Section End */}
              {/* Card Bottom Section Start */}
                <div className='h-[78px] w-[282px] lg:w-[458px] py-3 bg-white flex justify-around items-center'>
                  <div className='text-center'>
                    <h1 className='oxanium text-[18px] lg:text-[28px] leading-[22.5px] lg:leading-[35px] font-[700]'>Artist</h1>
                    <h1 className='worksans text-[14px] lg:text-[24px] leading-[35.45px] lg:leading-[35.45px] font-[400]'>@wizard</h1>
                  </div>
                  <div>
                    <div className=''>        
                      <a className=' border-[1px] border-[#FFCE4E] py-[16px] px-[24px] worksans font-[600] text-[18px] lg:text-[24px] leading-[21.11px] lg:leading-[28.15px] tracking-wide bg-[#FFCE4E] text-[#16091B] transform hover:scale-110 ' href="#">Start Bid</a>
                    </div>
                  </div>
                </div>
              {/* Card Bottom Section End */}
            </div>
          {/* Card End */}
        </div>
      </div>

      {/* Second Section Start */}
        <div className=' lg:hidden mt-10 mb-5 flex justify-around items-center py-3 px-1 text-[#F5FBF2]'data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <div className='text-center'>
            <h1 className='oxanium text-[36px] leading-[45px] font-[700]'>32k+</h1>
            <span className='text-[16px] leading-[35.45px] text-[#9B9E9A]'>Artwork</span>
          </div>
          <div className='text-center'>
            <h1 className='oxanium text-[36px] leading-[45px] font-[700]'>20k+</h1>
            <span className='text-[16px] leading-[35.45px] text-[#9B9E9A]'>Auctions</span>
          </div>
          <div className='text-center'>
            <h1 className='oxanium text-[36px] leading-[45px] font-[700]'>12k+</h1>
            <span className='text-[16px] leading-[35.45px] text-[#9B9E9A]'>Creators</span>
          </div>
        </div>
      {/* Second Section End */}

      {/* Arrow Icon Start */}
        <div className='-mt-8 animate-bounce  cursor-pointer hidden lg:flex justify-center' data-aos="fade-right" data-aos-duration="2000">
          <img className='w-16 h-16 transform hover:scale-95 bg-red-500 rounded-full' src="/images/Scroll.svg" alt="" />
        </div>
      {/* Arrow Icon End */}
    </div>
  )
}
