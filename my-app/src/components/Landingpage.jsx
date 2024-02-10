import React from 'react';
import { FaArrowUp } from "react-icons/fa6";

function Landingpage() {
    return (
        <div className='w-full h-screen bg-zinc-900 pt-1'>
            <div className="textstructure mt-40 px-20">
                {["We Create", "Eye Opening", "presentations"].map((item, index) => {
                    return <div key={index} className="masker">
                        <div className="w-fit flex items-end overflow-hidden">
                            {index === 1 && (<div className='mr-[1vw] w-[9vw] rounded-md h-[5.8vw] relative bg-green-500'></div>)}
                            <h1 className='uppercase text-[6.5vw] leading-[6.5vw] font-["Oswald"] font-medium'>{item}</h1>
                        </div>
                    </div>
                })}
            </div>
            <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (<p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>))}

                <div className="start flex items-center gap-1">
                    <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase">Start the project</div>
                    <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
                        <span className='rotate-[45deg]'>
                            <FaArrowUp />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage