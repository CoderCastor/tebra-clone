import { Phone } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "motion/react";

function MainMenu({ smallScreenMenu }) {
    const shadow = `shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]`;

    return (
        <>
            {smallScreenMenu && (
                <AnimatePresence>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.4,
                        }}
                        exit={{
                            opacity:0,
                        }}
                        className="h-full w-full absolute lg:hidden -translate-y-2 rounded-lg overflow-hidden border-t-1 border-zinc-200"
                    >
                        <div
                            className={`${shadow} flex justify-center items-center gap-3 text-[12px] text-[#003A43] bg-[#F7F5F1] py-3`}
                        >
                            Call sales
                            <Phone size={18} />
                            (866) 938-3272
                        </div>


                        

                    </motion.div>
                </AnimatePresence>
            )}
        </>
    );
}

export default MainMenu;
