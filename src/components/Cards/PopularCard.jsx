import React from 'react'

export default function PopularCard(props) {
  return (
    <div className='flex justify-center'>
        <div className='w-[300px] lg:w-[380px] bg-[#3D2942] px-3 py-2'>
            {/* Card Head Start */}
            <div className='h-[200px] bg-white '>
                <img className='w-full h-full object-cover' src={`/images/arts/${props.art}`} alt="" />
            </div>
            {/* Card Head End */}
            {/* Card Details Start */}
                <div className='flex justify-between items-center my-2'>
                    <div className='flex items-center space-x-2'>
                        <div className='h-[40px] w-[40px]'>
                            <img className='h-full w-full object-cover rounded-full' src={`/images/profile/${props.artistProfileImage}`} alt="" />
                        </div>
                        <h1 className='worksans text-[20px] leading-[35.45px] font-[600] text-[#F5FBF2] '>{props.artistUserName}</h1>
                    </div>
                    <div>
                        <h1 className='worksans text-[16px] leading-[35.45px] font-[600] text-[#C2B5C6] '>erc-{props.erc}</h1>
                    </div>
                </div>
            {/* Card Details End */}
        </div>
    </div>
  )
}
