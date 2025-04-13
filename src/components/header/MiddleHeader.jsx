import { Phone } from "lucide-react";
import React from "react";

import { PiSignInLight } from "react-icons/pi";

function MiddleHeader() {
    return (
        <div className="hidden bg-white text-[#003A43] lg:flex justify-end w-full items-center gap-8 px-12 tracking-tight text-[12px]">
            <a href="" className="flex items-center py-3 gap-3 font-medium">
                Sign In <PiSignInLight size={18} />
            </a>
            <a href="" className="flex items-center py-3 gap-3 font-medium">Help Center</a>
            <a href="" className="flex items-center py-3 gap-3 font-medium">Call sales
                <Phone size={12} />
            (866) 938-3272</a>
        </div>
    );
}

export default MiddleHeader;
