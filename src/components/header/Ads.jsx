import { Lightbulb, LucideSpeaker, MonitorSpeaker, SeparatorHorizontal, Speaker, SpeakerIcon } from 'lucide-react'
import React from 'react'

function Ads() {
  return (
    <div className='bg-[#EBF0F1] text-[#003A43] flex justify-center items-center py-5 gap-2 font-extralight sm:text-[16px] text-[12px] '>
      <Lightbulb size={17} /> See Tebra in action | <a className='underline cursor-pointer'> Explore the product for free and see how each feature can streamline your practice</a> →
    </div>
  )
}

export default Ads
