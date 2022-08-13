import React from 'react'

export default function AuctionCard(props) {
  return (
    <>
        <div className='w-[300px] lg:w-[400px] px-[6px] py-3 bg-[#3d2942]'>
            {/* Card Top Start */}
                <div className='h-[318px]  relative ' >
                    <div className='h-[318px]'>
                        <img className='h-full w-full object-cover' src={`/images/arts/${props.art}`}alt="" />
                    </div>
                    <div className='absolute bottom-0 p-3 bg-gradient-to-br from-[#8613A5]/100 to-[#FAFAFA]/90 '>
                        <h1 className='worksans leading-[35.45px] text-[18px] font-[600] text-[#F5FBF2] '>{props.date}</h1>
                    </div>
                </div>
            {/* Card Top End */}
            {/* Card Details Start */}
                {/* Artist & Art Details Start */}
                    <div className='flex justify-between items-center px-1 py-3 ' >
                        {/* Artist Info Start */}
                            <div className='flex items-center space-x-2 my-1'>
                                <div>
                                    <img className='h-[46px] w-[46px] rounded-full bg-pink-600' src={`/images/profile/${props.artistProfileImage}`} alt="" />
                                </div>
                                <div>
                                    <h1 className='worksans text-[18px] font-[600] text-[#F5FBF2]'>{props.artName}</h1>
                                    <span className='worksans text-[14px] font-[400] text-[#C6BFC8]'>by {props.artistUserName}</span>
                                </div>
                            </div>
                        {/* Artist Info End */}
                        {/* Art Likes Start */}
                            <div className='flex items-center space-x-2'>
                                <img className='' src="icons/like.svg" alt="" />
                                <span className='worksans text-[24px] leading-[35.45px] font-[400] text-[#C6BFC8] '>{props.likes}</span>
                            </div>
                        {/* Art likes End */}
                    </div>
                {/* Artist & Art Details End */}
                {/* Current Bid Section Start */}
                    <div className='flex justify-between  items-center my-1 '>
                        <div>
                            <h1 className='worksans text-[20px] leading-[35.45px] font-[400] text-[#C6BFC8] '>Top Bid</h1>
                        </div>
                        <div>
                            <h1 className='oxanium text-[24px] leading-[35.45px] font-[700] text-[#F5FBF2] '> {props.topBid} ETH</h1>
                        </div>
                    </div>
                {/* Current Bid Section End */}
                {/* Place Bid Button Start */}
                    <div className='flex justify-center items-center my-1'>
                        <button className='py-[14px] px-[76px] border-[1px] border-[#BCB39A] text-[20px] leading-[35.45px] font-[500] text-white bg-[#4e3a4c] transform hover:scale-95' disabled="disabled">Place a Bid</button>
                    </div>
                {/* Place Bid Button End */}
            {/* Card Details End */}
        </div>
    </>
  )
}
