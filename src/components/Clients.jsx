import React from 'react'

export default function Clients() {
  return (
    <div className='flex flex-wrap justify-center lg:justify-around space-x-4 gap-y-3 lg:gap-y-0 items-center my-10 lg:my-32 ' data-aos="zoom-in-up" data-aos-duration="2000">
        <div>
            <img className='h-[25px] lg:h-[41px] w-[120px] lg:w-[204px]' src="/images/binance.svg" alt="" />
        </div>
        <div>
            <img className='h-[18px] lg:h-[28.38px] w-[110px] lg:w-[177.66px]' src="/images/bitmex.svg" alt="" />
        </div>
        <div>
            <img className='h-[21px] lg:h-[33px] w-[95px] lg:w-[149px]' src="/images/coinbase.svg" alt="" />
        </div>
        <div>
            <img className='h-[12px] lg:h-[24px] w-[155px] lg:w-[309px]' src="/images/blockchain.svg" alt="" />
        </div>
    </div>
  )
}
