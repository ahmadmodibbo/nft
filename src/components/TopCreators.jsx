import React from 'react'
import TopCreatorsCard from './Cards/TopCreatorsCard'
import data from './data/topCreators'
export default function TopCreators() {
  const topCreators = data.map(item => {
    return (
      <TopCreatorsCard 
      artistProfileImage = {item.artistProfileImage}
      artistName = {item.artistName}
      ETH = {item.ETH}
      itemsNumber = {item.itemsNumber}
      />
    )
  })
  return (
    <div className='my-8 py-8 background bg-cover object-cover' data-aos="fade-left"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
        <div className='my-4 lg:my-20 py-8 '>
            <h1 className='oxanium text-[36px] lg:text-[64px] leading-[45px] font-[700] text-center text-[#F5FBF2] '>Top Creators</h1>
        </div>
        <div className='flex justify-around flex-wrap my-8'>
           {topCreators}
        </div>
    </div>
  )
}
