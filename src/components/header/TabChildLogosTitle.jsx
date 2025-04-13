import { Lightbulb } from "lucide-react";
import React from "react";



function TabChildLogosTitle({item}) {

    const shadow = `shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]`;
    return (
        <div className={`flex justify-center  gap-4 p-4 rounded-xl hover:bg-[#DBE4E4] duration-300 hover:${shadow}`}>
            <div className="logo mt-px">
                <Lightbulb color="green" />
            </div>
            <div className="titleDesc flex flex-col justify-center">
                <h3 className="text-[#003A43] text-[15px]">{item.Title}</h3>
                <p className="text-[13px] text-start text-[#213f39] font-extralight tracking-normal">
                    {item.description}
                </p>
            </div>
        </div>
    );
}

export default TabChildLogosTitle;
