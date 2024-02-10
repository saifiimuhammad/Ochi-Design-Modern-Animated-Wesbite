import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap overflow-hidden">
            {["We are Ochi", "We are Ochi"].map((item, index)=>(<h1 key={index} className='text-[20vw] leading-none font-bold font-["Oswald"] uppercase mb-8'>{item}</h1>))}
        </div>
    </div>
  )
}

export default Marquee