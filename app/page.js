'use client'
import { useRouter } from 'next/navigation';
import {SideBar} from '../components'

import { useAtom } from 'jotai';
import {atomWithStorage} from 'jotai/utils'

import { useSelectedCourse } from "../hooks/useSelectedCourse";
import { useEffect, useState } from 'react';
import { Router } from 'next/router';

export const yearAtom = atomWithStorage('year', null)
export const semesterAtom = atomWithStorage('semester', null)


export default function AppPage() {
  const router = useRouter()
  const [selectedCourse, toggleSelectedCourse] = useSelectedCourse()
  const [year, setYear] = useAtom(yearAtom)
  const [semester, setSemester] = useAtom(semesterAtom)

  useEffect(()=>{
    setYear(null)
    setSemester(null)
  },[])

  return (
    <>
    <SideBar currentPath={'/'} /> 
    <div className='absolute left-[200px] top-[70px] right-[20px] bottom-[20px] px-[20px] py-[20px]'>
      <div className='w-full h-full flex justify-center items-center'>
        {selectedCourse?(
          <div>
            <div className='text-[28px]'>{selectedCourse}</div>
            <div>
              Academinc Progression Year: <br/>
              <input type='radio' name='year' value={1} className='ml-[20px]' onChange={(e)=> setYear(e.target.value)}/> 1st
              <input type='radio' name='year' value={2} className='ml-[20px]' onChange={(e)=> setYear(e.target.value)}/>2nd
              <input type='radio' name='year' value={3} className='ml-[20px]' onChange={(e)=> setYear(e.target.value)}/>3rd
              {/* <input type='radio' name='year' className='ml-[20px]'/>4th */}
            </div>
            <div>
              <div>
                Semester:<br/>
                <input type='radio' name='semester' className='ml-[20px]' onChange={(e)=> setSemester(e.target.value)}/>First
                <input type='radio' name='semester' className='ml-[20px]' onChange={(e)=> setSemester(e.target.value)}/>Second
              </div>
            </div>
            <div className='mt-[20px] '>
              <button className='bg-green-600 w-[100px] rounded text-white px-[10px] py-[10px] font-bold' onClick={()=>{
                if(year&&semester){
                  router.push(`${selectedCourse}/`)

                }
              }}>
                Go now
              </button>
            </div>
          </div>
        ):(
          <div className=''>
          please select your course to continue
        </div>
        )}

      </div>
      {/* <Link href='/blog/[slug]/page' as='/blog/math'>go to</Link> */}
    </div>
    </>
  )

}

