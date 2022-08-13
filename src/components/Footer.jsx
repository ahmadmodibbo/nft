import React from 'react'

export default function Footer() {
    const abouts =[
        {name:"About NFTs" , link:"#"},
        {name:"Live Auctions" , link:"#"},
        {name:"NFT Blog", link:"#"},
        {name:"Activites", link:"#"}
    ]
    const supports=[
        {name:"Help & Support", link:"#"},
        {name:"Item Details", link:"#"},
        {name:"Author Profile", link:"#"},
        {name:"Collection", link:"#"}
    ]
  return (
    <div className='p-[2.5px]'>
        <div className='flex flex-col lg:grid lg:grid-cols-5  lg:place-content-start gap-y-8 '>
            <div className='grid justify-center col-span-1'>
                <img className='h-[112px] lg:h-[194px] w-[112px] lg:w-[194px] ' src="/images/logo.png" alt="" />
            </div>
            <div className='col-span-2 '>
                <p className='worksans text-center text-[18px] leading-[36px] font-[500] text-[#96839B] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit.</p>
                <ul className='hidden lg:flex justify-center items-center space-x-2 my-8'>
                    <li className='w-[40px] h-[40px] '><a href="#"><img src="/icons/facebook.png" alt="" /> </a></li>
                    <li className='w-[40px] h-[40px] '><a href="#"><img src="/icons/twitter.png" alt="" /> </a></li>
                    <li className='w-[40px] h-[40px] '><a href="#"><img src="/icons/tiktok.png" alt="" /></a></li>
                    <li className='w-[40px] h-[40px] '><a href="#"><img src="/icons/instagram.png" alt="" /></a></li>
                    <li className='w-[40px] h-[40px] '><a href="#"><img src="/icons/youtube.png" alt="" /></a></li>
                </ul>
            </div>
            <div className='flex justify-around text-left lg:col-span-2'>
                <div>
                    <h1 className='worksans text-left text-[24px] leading-[35.45px] font-[700] text-[#F5FBF2] '>About Us</h1>
                    <ul className='worksans text-[18px] leading-[50.5px] font-[500] text-[#96839B] '>
                        {abouts.map((about)=>(
                            <li>{about.name}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h1 className='worksans text-left text-[24px] leading-[35.45px] font-[700] text-[#F5FBF2] '>Supports</h1>
                    <ul className='worksans text-[18px] leading-[50.5px] font-[500] text-[#96839B] '>
                        {supports.map((support)=>(
                            <li>{support.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='lg:hidden'>
                <ul className='flex justify-center items-center space-x-2'>
                    <li className='w-[40px] h-[40px] '><a href="#"><img src="/icons/facebook.png" alt="" /> </a></li>
                    <li className='w-[40px] h-[40px] '><a href="#"><img src="/icons/twitter.png" alt="" /> </a></li>
                    <li className='w-[40px] h-[40px] '><a href="#"><img src="/icons/tiktok.png" alt="" /></a></li>
                    <li className='w-[40px] h-[40px] '><a href="#"><img src="/icons/instagram.png" alt="" /></a></li>
                    <li className='w-[40px] h-[40px] '><a href="#"><img src="/icons/youtube.png" alt="" /></a></li>
                </ul>
                <h1></h1>
            </div>
        </div>
    </div>
  )
}
