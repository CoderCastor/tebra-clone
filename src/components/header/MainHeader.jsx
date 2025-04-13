import React, { useState } from 'react'
import Ads from './Ads'
import MiddleHeader from './MiddleHeader'
import MainNavbar from './MainNavbar'
import TabComponent from './TabComponent'
import MainMenu from './smallScreenMenu.jsx/MainMenu'

function MainHeader() {

  const [tabHoverTitle,setTabHoverTitle] = useState(null)
  const [smallScreenMenu,setSmallScreenMenu] = useState(true)

  return (
    <div className='relative'>
      <Ads/>
      <MiddleHeader/>
      <MainNavbar setTabHoverTitle={setTabHoverTitle} setSmallScreenMenu={setSmallScreenMenu} smallScreenMenu={smallScreenMenu} />
      <TabComponent tabHoverTitle={tabHoverTitle} />
      <MainMenu smallScreenMenu={smallScreenMenu}/>
      {tabHoverTitle}
    </div>
  )
}

export default MainHeader
