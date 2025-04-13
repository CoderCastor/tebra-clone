import {
    ArrowBigDown,
    Lightbulb,
    LucideCross,
    MessageCircleIcon,
    Plus,
    SunIcon,
} from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// import {} from "geist/font/sans"

const shadow = `shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]`;

function CardExit() {
    const [open, setOpen] = useState(true);

    return (
        <> 
        <AnimatePresence>

            {open && (
                <motion.div 
                initial={{
                    opacity:0,
                    scale:0.98,
                    filter:"blur(10px)"

                }}
                animate={{
                    opacity:1,
                    scale:1,
                    filter:"blur(0px)"
                }}
                exit={{
                    opacity:0,
                    scale:0.98,
                    filter:"blur(10px)"
                }}
                transition={{
                    duration:0.5,
                    ease:"easeInOut"
                }} className="h-screen flex items-center justify-center bg-gray-50">
                    <div
                        className={`w-82 min-h-[26rem] h-[30rem] bg-white rounded-xl ${shadow} p-6 flex flex-col`}
                    >
                        <h2 className="font-bold text-sm">
                            Aceternity UI Components
                        </h2>
                        <p className="text-neutral-500 mt-px text-[10px] tracking-tighter">
                            A collection of beautiful UI components. let's get
                            on with it.
                        </p>
                        <div className="flex items-center justify-center">
                            <button
                                onClick={()=>setOpen(false)}
                                className={`flex items-center gap-1 text-[10px] mt-4 ${shadow} rounded-md  px-2 py-1`}
                            >
                                <ArrowBigDown size={15} /> Aceternity
                                <LucideCross size={12} />
                            </button>
                        </div>

                        <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-neutral-200 relative">
                            {/* //motion divs here */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.98,
                                    filter: "blur(10px)",
                                }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1.05,
                                    filter: "blur(0px)",
                                }}
                                transition={{
                                    // duration:0.5,
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                                className="absolute border border-neutral-200 inset-0 h-full w-full bg-white divide-y divide-neutral-200  rounded-lg"
                            >
                                <div className="flex gap-2 p-4">
                                    <div
                                        className={`h-7 w-7 flex-shrink-0 bg-gradient-to-br ${shadow} bg-white  rounded-md flex items-center justify-center`}
                                    >
                                        <MessageCircleIcon
                                            size={12}
                                            color="gray"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[8px] font-bold text-neutral-60">
                                            Aceternity UI Components
                                        </p>
                                        <p className="text-neutral-400 text-[8px]">
                                            A collection of UI components
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-2 p-4">
                                    <div
                                        className={`h-7 w-7 flex-shrink-0 bg-gradient-to-br ${shadow} bg-white  rounded-md flex items-center justify-center`}
                                    >
                                        <Lightbulb
                                            size={12}
                                            color="gray"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[8px] font-bold text-neutral-60">
                                            Power of Imagination
                                        </p>
                                        <p className="text-neutral-400 text-[8px]">
                                            Brings most innovative ideas
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-2 p-4">
                                    <div
                                        className={`h-7 w-7 flex-shrink-0 bg-gradient-to-br ${shadow} bg-white  rounded-md flex items-center justify-center`}
                                    >
                                        <Lightbulb
                                            size={12}
                                            color="gray"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[8px] font-bold text-neutral-60">
                                            Power of Imagination
                                        </p>
                                        <p className="text-neutral-400 text-[8px]">
                                            Brings most innovative ideas
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-2 p-4">
                                    <div
                                        className={`h-7 w-7 flex-shrink-0 bg-gradient-to-br ${shadow} bg-white  rounded-md flex items-center justify-center`}
                                    >
                                        <SunIcon
                                            size={12}
                                            color="gray"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[8px] font-bold text-neutral-60">
                                            Brighter things
                                        </p>
                                        <p className="text-neutral-400 text-[8px]">
                                            Things becomes more creative
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center mt-4 gap-2">
                                    <div
                                        className={`${shadow} h-6 w-6 rounded-lg flex justify-center items-center `}
                                    >
                                        <Plus
                                            color="gray"
                                            size={14}
                                        />
                                    </div>
                                    <p className="text-xs text-neutral-300">
                                        Create Project
                                    </p>
                                </div>
                            </motion.div>
                            {/* //motion divs ends here */}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}

export default CardExit;
