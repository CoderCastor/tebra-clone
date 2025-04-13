import React, { useState } from 'react'
import Ads from './Ads'
import MiddleHeader from './MiddleHeader'
import MainNavbar from './MainNavbar'
import TabComponent from './TabComponent'

function MainHeader() {

  const [tabHoverTitle,setTabHoverTitle] = useState(null)

  return (
    <div className='relative'>
      <Ads/>
      <MiddleHeader/>
      <MainNavbar setTabHoverTitle={setTabHoverTitle} />
      <TabComponent tabHoverTitle={tabHoverTitle} />
      {tabHoverTitle}
    </div>
  )
}

export default MainHeader
