import React from 'react'
import img1o from "../../../public/assets/img1o.png"
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
const Okompaniya = () => {
  return (
    <>
    <div className="max-w-[1440px] mx-auto px-5 flex pt-[20px] gap-2 custom-text mb-[80px]">
        <NavLink to="/">
          <span className="text-[#7A7687] cursor-pointer flex items-center gap-2">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
          </span>
        </NavLink>
        <NavLink>
          <span className="text-[#202020] font-medium cursor-pointer flex items-center gap-2">
          О компании
          </span>
        </NavLink>
      </div>
      <div className="max-w-[1440px] mx-auto px-5 flex pt-[20px] gap-2 custom-text mb-[80px]">
        <img src={img1o} alt="" className='w-full' />
      </div>
    </>
  )
}

export default Okompaniya