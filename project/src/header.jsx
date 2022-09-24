import React from 'react'
import './index.css'

function Header() {
  // function BelowTop() {
  //   if (window.scrollY !== 0) {
  //     return 'bg-transparent'
  //   }

  //   else {
  //     return 'bg-black'
  //   }
  // }

  // let headerBgColor = BelowTop()

  return (
    <div className='flex fixed justify-center items-center h-28 w-full'>
      <div className='flex justify-between w-5/6 px-8'>
        <div>
          <h1 className='text-4xl font-bold align-center'><a href={"/"}>Header</a></h1>
        </div>
        <ul className='flex items-center text-2xl'>
          <li className='pl-16'><a href={"#"} className='hover:underline'>About me</a></li>
          <li className='pl-16'><a href={"#"} className='hover:underline'>My projects</a></li>
          <li className='pl-16'><a href={"#"} className='hover:underline'>Contact me</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
