import React, { useState } from 'react'
import { AlignJustify, History, MessageCircleQuestion, MessageSquare, Settings } from 'lucide-react';
import { Plus } from 'lucide-react';
import { useContext } from 'react';
import { Context } from '../context/Context'


const Sidebar = () => {

  const [extend, setExtend] = useState(false)
  const { recent, setRecent, previus, onSent, newChat } = useContext(Context)

const sidebarclick = async(item)=>{
  setRecent(item)
  await onSent(item)
}

  return (
    <div className='min-h-screen flex-col justify-between py-[25px] px-[15px] inline-flex items-center bg-[#dee1e4]'>
      <div className=''>
        <div className='items-center'>
          <AlignJustify className='items-center block cursor-pointer' onClick={() => setExtend(!extend)} />

        </div>
        <div onClick={()=>(newChat())} className='inline-flex mt-[10px] rounded-full bg-gray-300 cursor-pointer items-center gap-[10px] py-[10px] px-[15px] text-[14px] text-gray-500'>
          <Plus className='rounded-full' />
          {extend && <p>New Chat</p>}
        </div>
        {
          extend && <div className='flex flex-col'>
            <p className='mt-7 mb-5'>Recent</p>

            {
              previus.map((item, index) => {

                return (
                  <div onClick={()=>(sidebarclick(item))} className='flex hover:bg-gray-300 gap-3 text-slate-700 pr-10 cursor-pointer p-[10px] rounded-full'>
                    <MessageSquare />
                    <p>{item.slice(0, 10)}...</p>
                  </div>

                )
              }
              )
            }
          </div>
        }
      </div>


      <div className=''>
        <div className='flex hover:bg-gray-300 cursor-pointer gap-2 rounded-full p-[10px] my-3'>
          <MessageCircleQuestion />
          {extend && <p>Help</p>}
        </div>
        <div className='flex hover:bg-gray-300 cursor-pointer gap-2 rounded-full p-[10px] my-3'>
          <History />
          {extend && <p>Activity</p>}
        </div>
        <div className='flex hover:bg-gray-300 cursor-pointer gap-2 rounded-full p-[10px] my-3'>
          <Settings />
          {extend && <p>Settings</p>}
        </div>

      </div>
    </div>

  )
}

export default Sidebar
