import { CircleUser, CodeXml, Compass, Image, LayoutGrid, Lightbulb, Loader, MessageSquare, Mic, SendHorizontal, Sparkle } from 'lucide-react'
import React, { useContext } from 'react'
import { Context } from '../context/Context'

const Maincontent = () => {

  const { input, setInput, previus, setPrevius, loading, show, setRecent,recent, resultData, setResultData, onSent } = useContext(Context)

  return (
    <div className='flex-1 min-h-screen pb-[15vh] relative'>
      <div className='flex justify-between text-slate-500 p-10'>
        <p className='text-2xl font-semibold'>Gemini</p>
        <div className='flex gap-4'>
          <div className='flex bg-gray-300 p-[10px] rounded-full'><Sparkle className='text-red-500' /> <p className='ms-2'>Try Gemini Advanced</p></div>
          <LayoutGrid className='mt-3' />
          <CircleUser className='mt-3' />
        </div>
      </div>
      <div className='max-w-[900px] mx-auto'>
        {!show ? <>
          <div className='my-12 text-[52px] p-5 '>
          <p>
            <span className='bg-gradient-to-r from-[#368ddd] to-[#ff5546] bg-clip-text text-transparent'>
              Hello, Asish
            </span>
          </p>
          <p className='text-slate-400'>How can I help you</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
          <div className='h-[200px] bg-gray-200 hover:bg-gray-300 p-4 rounded-lg relative cursor-pointer'>
            <p>Suggest top movies</p>
            <Compass className='size-10 absolute p-1 bottom-1 right-1' />
          </div>
          <div className='h-[200px] bg-gray-200 hover:bg-gray-300 p-4 rounded-lg relative cursor-pointer'>
            <p>Suggest top movies</p>
            <Lightbulb className='size-10 absolute p-1 bottom-1 right-1' />
          </div>
          <div className='h-[200px] bg-gray-200 hover:bg-gray-300 p-4 rounded-lg relative cursor-pointer'>
            <p>Suggest top movies</p>
            <MessageSquare className='size-10 absolute p-1 bottom-1 right-1' />
          </div>
          <div className='h-[200px] bg-gray-200 hover:bg-gray-300 p-4 rounded-lg relative cursor-pointer'>
            <p>Suggest top movies</p>
            <CodeXml className='size-10 absolute p-1 bottom-1 right-1' />
          </div>
        </div>
        </>:(
            <div className='py-0 px-[5%] overflow-y-scroll max-h-[70vh] scrollbar-hidden'> 
              <div className='my-10 mx-0 gap-4 flex items-center'>
                <CircleUser />
                <p>{recent}</p>
              </div>
              <div className='flex items-start gap-4'>
                  <img src="https://th.bing.com/th/id/OIP.hDYdu41z9qSUmx0K3wuSuQAAAA?rs=1&pid=ImgDetMain" className='h-[40px]' />
                  {loading ? 
                 ( <div className='w-full flex flex-col gap-2'>
                    <hr className='border-none rounded-md bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-scroll-bg' />
                    <hr className='border-none rounded-md bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-scroll-bg' />
                    <hr className='border-none rounded-md bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-scroll-bg' />
                  </div>) :  (<p dangerouslySetInnerHTML={{ __html:resultData}}></p>)}
                 
              </div>
            </div>
        )}
        
        <div className='absolute max-w-[900px] w-full bottom-5 px-5 mx-5'>
          <div className='bg-gray-200 rounded-lg flex justify-between items-center px-2 py-2'>
            <input type="text" placeholder='Enter Prompt here...'
             className='border-none outline-none bg-transparent text-lg p-2 flex-1' value={input} onChange={(e)=>setInput(e.target.value)} />
            <div className='flex items-center gap-2'>
              <Image />
              <Mic />
              {input && <SendHorizontal onClick={()=>onSent()} />}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Maincontent
