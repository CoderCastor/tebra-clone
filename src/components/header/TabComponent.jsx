import React from "react";
import TabChildLogosTitle from "./TabChildLogosTitle";
import { motion, AnimatePresence } from "motion/react";

const SubTabProducts = [
    {
        logo: <></>,
        Title: "Patient Experience",
        description:
            "Combine exceptional care with exceptional patient experience",
    },
    {
        logo: <></>,
        Title: "EHR",
        description:
            "Increase time with patients, reduce paperwork, and maximize reimbursements.",
    },
    {
        logo: <></>,
        Title: "Billing & Payments",
        description: "Effortlessly collect faster and at higher rates.",
    },
    {
        logo: <></>,
        Title: "Practice Growth",
        description:
            "Grow your presence, attract more patients, and optimize for a digital world.",
    },
];

const SubTabPracticetype = [
    {
        logo: <></>,
        Title: "Independent Practices",
        description:
            "Experience digital tools and support built to help independent practices.",
    },
    {
        logo: <></>,
        Title: "Billing Companies",
        description:
            "Advanced billing solutions to optimize your company's revenue cycle.",
    },
];

function TabComponent({ tabHoverTitle }) {
    const shadow = `shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]`;

    return (
        <>
            <AnimatePresence>
                {tabHoverTitle === "products" && (
                    <motion.div
                        initial={{
                            y: -15,
                            opacity: 30,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                        exit={{
                            y: -15,
                            opacity: 0,
                        }}
                        className="h-[75vh] w-full absolute hidden lg:block -translate-y-2 rounded-lg overflow-hidden"
                    >
                        <div
                            className={`tabProducts ${shadow}  w-[1050px] h-full bg-neutral-100 mx-auto grid grid-cols-12 rounded-lg overflow-hidden`}
                        >
                            {/* Tab 1 - Products */}
                            <div className="col-span-3 bg-[#EBF0F1]  h-full pl-4 pr-2 py-10 flex flex-col gap-2">
                                <h3 className="text-[#003A43] text-[18px] pl-2">
                                    Products
                                </h3>
                                {SubTabProducts.map((item, index) => (
                                    <TabChildLogosTitle item={item} />
                                ))}
                            </div>

                            <div className="col-span-3 bg-white h-full pl-4 pr-2 py-10 flex flex-col gap-2">
                                <h3 className="text-[#003A43] text-[18px] pl-2">
                                    Practice Type
                                </h3>
                                {SubTabPracticetype.map((item, index) => (
                                    <TabChildLogosTitle item={item} />
                                ))}
                            </div>
                            <div className="col-span-3 bg-white h-full pl-4 pr-2 py-10 flex flex-col gap-2">
                                <h3 className="text-[#003A43] text-[18px] pl-2">
                                    Speciality
                                </h3>
                                {SubTabProducts.map((item, index) => (
                                    <TabChildLogosTitle item={item} />
                                ))}
                            </div>
                            <div className="col-span-3 bg-pink-50 h-full">
                                a
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default TabComponent;
