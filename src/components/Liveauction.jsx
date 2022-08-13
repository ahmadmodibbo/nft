import React from 'react'
import AuctionCard from './Cards/AuctionCard'
import data from './data/liveAuction'
export default function Liveauction() {
  const liveAuction = data.map(item => {
    return(
      <AuctionCard 
        art = {item.art}
        date = {item.date}
        artName = {item.artName}
        artistProfileImage = {item.artistProfileImage}
        artistUserName = {item.artistUserName}
        likes = {item.likes}
        topBid = {item.topBid}
      />
    )
  }
    )
  return (
      <div className='my-8 ' data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
        <div className='text-center my-6 lg:my-7'>
            <h1 className='oxanium text-[36px] leading-[45px] font-[700] text-white'>Live Auction</h1>
        </div>
        <div className='grid grid-flow-col space-x-5 overflow-scroll pl-4 lg:pl-10 py-4'>
            {liveAuction}
        </div>
      </div>
  )
}
