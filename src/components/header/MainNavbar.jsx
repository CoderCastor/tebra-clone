import React, { useState } from "react";
import imagetitleLogo from "../../assets/logo-header.xl.svg";
import imageLogo from "../../assets/tebra-symbol.svg";
import { RiArrowDownWideLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "motion/react";

function MainNavbar({ setTabHoverTitle, setSmallScreenMenu, smallScreenMenu }) {
    return (
        <div className="lg:px-14 md:px-14  px-4 flex justify-between items-center py-4 border-b-1 border-neutral-300">
            <span className="">
                <img
                    src={imagetitleLogo}
                    alt="main logo "
                    className="cursor-pointer hidden sm:block"
                />
                <img
                    src={imageLogo}
                    alt="small logo"
                    className="cursor-pointer sm:hidden"
                />
            </span>

            {/* navbar */}
            <div className="flex-1 hidden lg:flex justify-center items-center text-[18px] text-[#003A43] ">
                <button
                    onMouseEnter={() => setTabHoverTitle("products")}
                    onMouseLeave={() => setTabHoverTitle(null)}
                    className="hover:bg-[#F8F3EB] group duration-300 px-3 py-3 rounded-4xl flex gap-2 justify-center items-center"
                >
                    Products{" "}
                    <span className="group-hover:rotate-180 duration-300 delay-75 ">
                        <RiArrowDownWideLine size={14} />
                    </span>
                </button>
                <button className="hover:bg-[#F8F3EB] group duration-300 px-3 py-3 rounded-4xl">
                    Pricing
                </button>
                <button
                    onMouseEnter={() => setTabHoverTitle("products")}
                    onMouseLeave={() => setTabHoverTitle(null)}
                    className="hover:bg-[#F8F3EB] group duration-300 px-3 py-3 rounded-4xl flex gap-3 justify-center items-center"
                >
                    Resources{" "}
                    <span className="bg-[#D2DCDA] rounded-4xl text-xs py-1 px-2">
                        New
                    </span>{" "}
                    <span className="group-hover:rotate-180 duration-300 delay-75 ">
                        <RiArrowDownWideLine size={14} />
                    </span>
                </button>
                <button
                    onMouseEnter={() => setTabHoverTitle("products")}
                    onMouseLeave={() => setTabHoverTitle(null)}
                    className="hover:bg-[#F8F3EB] group duration-300 px-3 py-3 rounded-4xl flex gap-2 justify-center items-center"
                >
                    About{" "}
                    <span className="group-hover:rotate-180 duration-300 delay-75 ">
                        <RiArrowDownWideLine size={14} />
                    </span>
                </button>
            </div>

            {/* {hovered && "Hello"} */}

            <div className="buttons sm:gap-6 gap-3 flex justify-center items-center">
                <button className="sm:text-[18px] text-[14px]   border-[1px] border-[#003A43] text-[#003A43] rounded-4xl py-3 px-5 cursor-pointer text-nowrap">
                    Take a tour
                </button>
                <button className="sm:text-[18px] text-[14px] bg-[#FF8D6E] text-[#232323] rounded-4xl py-3 px-5 cursor-pointer text-nowrap">
                    Get a demo
                </button>
                
                <button className="lg:hidden text-2xl">
                    {smallScreenMenu ? (
                        <AnimatePresence>

                        <motion.span exit={{
                          rotate:90
                        }}
                        animate={{
                            rotate:90
                        }}
                        transition={{
                            duration:.4
                        }} onClick={() => setSmallScreenMenu(false)}>
                            <IoClose />
                        </motion.span>
                        </AnimatePresence>
                    ) : (
                        <motion.span onClick={() => setSmallScreenMenu(true)}>
                            <GiHamburgerMenu />
                        </motion.span>
                    )}
                </button>
                
            </div>
        </div>
    );
}

export default MainNavbar;
