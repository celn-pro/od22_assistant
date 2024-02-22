'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';

import { useSelectedCourse } from "../hooks/useSelectedCourse";
import Router from 'next/router';

const SideBar = ({currentPath}) => {
  const router = useRouter()
  // const currentPath = Router.pathname
  const [selectedCourse, toggleSelectedCourse] = useSelectedCourse()

  // useEffect(()=>{
  //   console.log(currentPath)
  // },[currentPath])
  return (
    <div className='absolute left-0 top-[50px] bottom-0 w-[200px] px-[20px] py-[20px]'>
      <div className='border-2 rounded px-[10px] py-[10px] w-full h-full'>
        {currentPath =='/'?(
          <>
          <div>Course</div>
          <div className='bg-gray-200 text-[12px] h-[100px] overflow-auto rounded py-[10px] px-[10px]'>
            <div>
              <div className='cursor-pointer' onClick={()=> toggleSelectedCourse('COE')}>COE</div>
              <div className='cursor-pointer' onClick={()=> toggleSelectedCourse('CST')}>CST</div>
              <div className='cursor-pointer' onClick={()=> toggleSelectedCourse('ETE')}>ETE</div>
              <div className='cursor-pointer' onClick={()=> toggleSelectedCourse('IT')}>IT</div>
            </div>
          </div>
          </>
        ):(
          <>
          <div>
            Modules
          </div>
          <div className='text-[12px] px-[10px] py-[10px]'>
            <div>Math</div>
            <div>OS</div>
            <div>Networking</div>
          </div>
          </>
        )}
      </div>
    </div>
  )
}

export default SideBar