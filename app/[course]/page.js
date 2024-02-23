'use client'
import { useEffect, useState } from "react"
import { SideBar } from "../../components"

import { reviews } from "../../constants"

import { useSelectedNotesReview, useSelectedModule} from '../../hooks'
async function getData() {
    const res = await fetch('https://api.example.com/...', { next: { revalidate: 3600 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }    
    
    export default function Page({ params }) {

      const [selectedNotesReview,toggleSelectedNotedReview] = useSelectedNotesReview()
      const [selectedModule, toggleSelectedModule] = useSelectedModule()
      const [filteredData, setFilteredData] = useState([])
      const [showAnswer, setShowAnswer] = useState(false)
      const [questionId, setQuestionId] = useState()
      const [data, setData] = useState()
      const [selectedTopic, setSelectedTopic] = useState('')

      useEffect(()=>{
        let Data = reviews.filter(s=> s[selectedModule])
        setData(Data)
        setFilteredData(null)
        setSelectedTopic(null)
      },[selectedModule])

        return <div>
          <SideBar currentPath={params.course} />
          <div className="absolute left-[200px] text-black top-[70px] right-[20px] bottom-[20px]">
            <div className={`${selectedNotesReview?'hidden':'block'} flex justify-center items-center h-full`}>
              <div>please choose module</div>
            </div>
            {selectedNotesReview&&<div className=" w-[300px] rounded px-[10px] py-[10px] border-2 h-full">
              <div className="mb-[10px]">Topics</div>
              <div>{selectedNotesReview=='review'&&<div>
                  {data?.map(D => D[`${selectedModule}`]?.map(d => <div className={`${selectedTopic==d.motion?'bg-yellow-300':'bg-gray-200'} px-[10px] mb-[10px] text-[14px] rounded cursor-pointer`} onClick={()=>{
                    setQuestionId(null)
                    setSelectedTopic(d.motion)
                    // let fData = data.filter(z => z[`${selectedModule}`][])
                    // console.log(fData)
                    console.log(d.questions)
                    setFilteredData(d.questions)
                    // console.log(filteredData)
                  }}>{d.motion}</div>))}
                </div>}</div>
            </div>}
            {/* {selectedNotesReview==='notes'&&<div>
                <div>notes not yet implemented</div>
              </div>} */}
              <div className={`${selectedNotesReview?'block':'hidden'} absolute left-[305px] bottom-0 top-0 right-0 px-[10px] py-[10px] rounded border-2`}>
                <div className="mb-[10px]">Questions</div>
                <div className={`${selectedNotesReview ==='review'?'block':'hidden'} overflow-auto h-[500px]`}>
                  {filteredData?.map((q,i)=> {
                    return <div key={q.q} className="">
                      <div className="bg-gray-200 px-[10px] rounded py-[10px] mb-[10px]">
                        <div className="mb-[10px]">{q.q}</div>
                        <button className="w-[100px] bg-green-600 py-[5px] rounded font-bold mb-[10px] text-white" onClick={()=> {
                          setQuestionId(i)
                          setShowAnswer(!showAnswer)
                        }}>{showAnswer && questionId == i?'Hide':'Answer'}</button>
                        <div className={`${showAnswer && questionId === i?'block':'hidden'} px-[20px] py-[20px] rounded bg-white`}>
                          {q.a}
                        </div>
                      </div>
                    </div>
                  })}
                </div>
              </div>
          </div>
        </div>
    }