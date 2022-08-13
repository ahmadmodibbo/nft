import React from 'react'

export default function TopCreatorsCard(props) {
  return (
    <div>
        <div className='w-[300px] flex justify-between items-center bg-[#302034] p-4 border-l-[2px] border-[#e03054] mt-2 mb-2'>
            <div className='flex items-center space-x-2'>
                <div className=' '>
                    <img className='w-[48px] h-[48px] rounded-full' src={`/images/profile/${props.artistProfileImage}`} alt="" />
                </div>
                <div>
                    <h1 className='worksans text-[20px] leading-[35.45px] font-[600] text-[#F5FBF2] '>{props.artistName}</h1>
                    <span className='worksans text-[14px] leading-[35.45px] font-[400] text-[#BDAAC1] '>{props.ETH} ETH</span>
                </div>
            </div>
            <div className='border-l-[2px] border-[#5E4564] pl-3 flex flex-col items-center'>
                <div>
                    <h1 className='oxanium text-[24px] leading-[35.45px] font-[700] text-[#F5FBF2] '>{props.itemsNumber}</h1>
                    <span className='worksans text-[16px] leading-[35.45px] font-[500] '>Items</span>
                </div>
            </div>
        </div>
    </div>
  )
}
