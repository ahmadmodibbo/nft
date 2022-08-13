import React from 'react'
import PopularCard from './Cards/PopularCard'
import data from './data/popularCollections'

export default function PopularCollections() {
  const PopularCollections=data.map(item=>{
    return(
      <PopularCard
        art = {item.art}
        artistProfileImage = {item.artistProfileImage}
        artistUserName = {item.artistUserName}
        erc = {item.erc}
      />
    )
  })
  return (
    <div className='px-1' data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
        <div className='my-4 lg:my-20'>
            <h1 className='oxanium text-[36px] lg:text-[64px] leading-[45px] font-[700] text-center text-[#F5FBF2] '>Popular Collections</h1>
        </div>
        <div className='grid grid-flow-col space-x-5 overflow-scroll pl-4 lg:pl-10 py-4'>
            {PopularCollections}
        </div>
    </div>
  )
}
