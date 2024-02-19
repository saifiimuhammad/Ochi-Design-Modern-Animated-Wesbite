import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Power4 } from "gsap";

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHoverStart = (index) => {
        cards[index].start({ y: "0" });
    };
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    };

    return (
        <div className='w-full py-[6vw] font-["Neue_Montreal"]'>
            <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-12">
                <h1 className="text-6xl font-light">Featured projects</h1>
            </div>
            <div className="px-20">
                <div className="cards flex gap-5 w-full mt-10">
                    <motion.div onHoverStart={() => handleHoverStart(0)}
                        onHoverEnd={() => handleHoverEnd(0)} className="card w-1/2 h-[85vh] relative">
                        <h1 className="hover-heading absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none font-['Oswald'] text-8xl font-semibold text-[#CDEA68] flex overflow-hidden z-10">
                            {"FYDE".split("").map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                                    className="inline-block"
                                    key={index}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <h3 className="card-title uppercase mb-4 flex items-center">
                            <div className="w-3 h-3 rounded-full bg-zinc-100 mr-[1rem]"></div>{" "}
                            Fyde
                        </h3>
                        <div
                            className="card-content w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png')] rounded-xl  border-[1px] border-zinc-800"
                        ></div>
                    </motion.div>
                    <motion.div onHoverStart={() => handleHoverStart(1)}
                        onHoverEnd={() => handleHoverEnd(1)} className="card w-1/2 h-[85vh] relative">
                        <h1 className="hover-heading absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 leading-none font-['Oswald'] text-8xl font-semibold text-[#CDEA68] flex overflow-hidden">
                            {"VISE".split("").map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: Power4.easeInOut, delay: index * 0.01 }}
                                    className="inline-block"
                                    key={index}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <h3 className="card-title uppercase mb-4 flex items-center">
                            <div className="w-3 h-3 rounded-full bg-zinc-100 mr-[1rem]"></div>{" "}
                            Vise
                        </h3>
                        <div
                            className="card-content w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg')] rounded-xl  border-[1px] border-zinc-800"
                        ></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
