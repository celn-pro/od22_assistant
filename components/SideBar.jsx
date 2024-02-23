'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

import { useSelectedCourse, useSelectedNotesReview, useSelectedModule } from "../hooks";
import Router from 'next/router';

const SideBar = ({currentPath}) => {
  const router = useRouter()
  const [selectedCourse, toggleSelectedCourse] = useSelectedCourse()
  const [selectedNotesReview, toggleSelectedNotesReview] = useSelectedNotesReview()
  const [selectedModule, toggleSelectedModule] = useSelectedModule()
  const [selectedIndex, setSelectedIndex] = useState(null)
  // const [notesReview, setNotesReview] = useState('')

  const Modules = [{t:'Eng Mathematics', n: 'math'}, {t:'Operating System', n:'os'}, {t:'Networking Admin', n:'networking'}] 
  return (
    <div className='absolute text-black left-0 top-[50px] bottom-0 w-[200px] px-[20px] py-[20px]'>
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
            {Modules.map((m,i)=>{
              return <div key={i} className='mb-[10px]'><div className='cursor-pointer' onClick={()=> {
                if(selectedIndex == i){
                  setSelectedIndex(null)
                }else{
                  setSelectedIndex(i)
                  toggleSelectedModule(m.n)
                }
              }}>- {m.t}</div>
              <div className={`${selectedIndex === i? 'block':'hidden'}`}>
                <div className={`${selectedNotesReview === 'notes'?'bg-yellow-300':''} px-[10px] rounded cursor-pointer`} onClick={()=> toggleSelectedNotesReview('notes')}>-&gt; Notes</div>
                <div className={`${selectedNotesReview === 'review'?'bg-yellow-300':''} px-[10px] rounded cursor-pointer`} onClick={()=> toggleSelectedNotesReview('review')}>-&gt; Review</div>
              </div></div>
            })}
          </div>
          </>
        )}
      </div>
    </div>
  )
}

export default SideBar