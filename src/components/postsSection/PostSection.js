import React from 'react'
import './postsection.css'
import Showposts from '../ShowPosts/Showposts'
import Sidebar from '../sideBar/Sidebar'

export default function PostSection() {
  return (
    <div className='postSectionContainer d-flex flex-row justify-content-between'>
      <Showposts/>
      <Sidebar/>
    </div>
  )
}
