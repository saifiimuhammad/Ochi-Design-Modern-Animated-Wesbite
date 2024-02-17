import React from 'react'

function Cards() {
  return (
    <div className='px-20 w-full h-screen flex items-center gap-5'>
        <div className="card-container h-[55vh] w-1/2">
            <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-8 bottom-8 rounded-full px-4 py-1 border-[1px] border-[#CDEA68] text-[#CDEA68]'>&copy;2019-2022</button>
            </div>
        </div>
        <div className="card-container h-[55vh] w-1/2 flex gap-5">
            <div className="relative flex items-center justify-center card w-1/2 h-full bg-[#212121] rounded-xl">
              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
              <button className='absolute left-8 bottom-8 rounded-full px-4 py-1 border-[1px] border-zinc-100 text-zinc-100'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className="relative flex items-center justify-center card w-1/2 h-full bg-[#212121] rounded-xl">
              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
              <button className='absolute left-8 bottom-8 rounded-full px-4 py-1 border-[1px] border-zinc-100 text-zinc-100'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
            
        </div>
    </div>
  )
}

export default Cards