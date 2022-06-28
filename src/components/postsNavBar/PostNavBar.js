import React from 'react'
import './postnavbar.css'
import logo from './joingroup.png'
export default function PostNavBar() {
  return (<>
    <div className='navbarContainer flex-row justify-content-between'>
      <div className='toggleNav flex-row'>
        <div className='navToggleButton Active'>All Posts(32)</div>
        <div className='navToggleButton inActive'>Article</div>
        <div className='navToggleButton inActive'>Event</div>
        <div className='navToggleButton inActive'>Education</div>
        <div className='navToggleButton inActive'>Job</div>
      </div>
      <div className='navControls flex-row'>
        <div className='writePostButton'>Write a Post<i class="fa-solid fa-caret-down downIcon"></i></div>
        <div className='joinGroupButton'><img src={logo} alt='Logo'className='joinGroupLogo'/>Join Group</div>
      </div>
    </div>
    <div className='ResponsivePostNavBar'>
    <div className='navbarContainerRes flex-row justify-content-between'>
    <div className='toggleNav d-flex flex-row'>
      <div className='navToggleButtonRes Active'>Posts(32)</div>
    </div>
    <div className='navControls d-flex flex-row'>
      <div className='writePostButtonRes'>Filter: All<i class="fa-solid fa-caret-down downIcon"></i></div>
    </div>



    </div>

    </div>
    </>
  )
}
