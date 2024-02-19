import React from 'react'

function About() {
    return (
        <div className='w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black'>
            <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4vw] tracking-tight'>
                Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
            </h1>
            <div className=" flex gap-5 w-full mt-20 pt-10 border-t-[1px] border-[#99AD52]">
                <div className="w-1/2">
                    <h1 className='text-6xl font-["Neue_Montreal"]'>Our approach:</h1>
                    <button className='flex gap-8 items-center px-6 py-4 mt-7 bg-zinc-900 rounded-full text-white text-md font-medium uppercase'>
                        Read More
                        <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
                    </button>
                </div>
                <div className="w-1/2 h-[65vh] bg-[#B0C859] rounded-2xl">
                    <img className='w-full h-full rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" data-src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" data-srcset="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x" alt="image description" data-ll-status="loaded" srcSet="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x" />
                </div>
            </div>
        </div>
    )
}

export default About