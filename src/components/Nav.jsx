import React from 'react'
import { useState } from 'react'

export default function Nav() {
    const menuLists =[
        {name:"Explore", link:"#"},
        {name:"Creators", link:"#"},
        {name:"Community", link:"#"},
    ]
    const [toggle, setToggle] = useState(false)
  return (
    <nav className='px-[10px] lg:px-20 py-3 flex justify-between lg:grid lg:grid-cols-3 bg-[#1C121F] lg:bg-transparent  lg:absolute lg:w-full' data-aos="flip-right" data-aos-duration="1000" >
        {/* logo Start */}
            <div className='flex justify-start items-center'>
                <img className='w-[43px] h-[43px]' src="/images/logo.png" alt="" />
            </div>
        {/* logo End */}
        {/* Mobile MenuToggle Button Start */}
            <div className='lg:hidden'>
                <img className='w-8 h-8 lg:hidden ' onClick={()=>setToggle(!toggle)} src="/icons/menuicon.svg" alt="" />    
            </div>
        {/* Mobile MenuToggle Button Start */}
        {/* Nav Menu List Start */}
            <div className={`absolute lg:static z-10  w-full lg:w-auto right-0  ${toggle?'top-16':'-top-96'}`}>
                <div className='py-7 flex flex-col lg:flex-row items-center gap-y-2 bg-[#1C121F] lg:bg-transparent'>
                    <ul className='text-[20px] flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-10 items-center justify-between worksans leading-[21.11px] font-[500] text-[#F5FBF2]'>
                        {menuLists.map((menuList, index)=>(
                            <li className='hover:text-[#FFCE4E] cursor-pointer hover:underline hover:font-bold transform hover:scale-110' key={index} >{menuList.name}</li>
                        ))}
                    </ul>
                    {/* Wallet Connect Button Start */}
                        <div className='my-6 lg:hidden'>
                            <h1 className='transform hover:scale-105'><a className='text-[#FFCE4E] border-[1px] border-[#FFCE4E] py-3 px-2 worksans font-[600] text-[18px] leading-[21.11px] ' href="#">Connect Wallet</a></h1>
                        </div>
                    {/* Wallet Connect Button End */}
                </div>
            </div>
        {/* Nav Menu List End */}

        {/* Wallet Connect Button Start */}
            <div className='hidden lg:grid place-items-end items-center '>
                <h1 className='transform hover:scale-105'><a className='text-[#FFCE4E] border-[1px] border-[#FFCE4E] py-3 px-2 worksans font-[600] text-[18px] leading-[21.11px] ' href="#">Connect Wallet</a></h1>
            </div>
        {/* Wallet Connect Button End */}
    </nav>
  )
}
