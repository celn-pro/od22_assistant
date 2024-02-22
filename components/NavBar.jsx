import React from 'react'

const NavBar = () => {
  return (
    <div className='h-[50px] border-b-2 px-[20px] flex justify-start'>
      <div className='flex justify-between items-center w-full'>
        <div>od22</div>
        <div className='flex justify-end items-center gap-5'>
          <div>Analytics</div>
          <div>Documentation</div>
        </div>
      </div>
    </div>
  )
}

export default NavBar