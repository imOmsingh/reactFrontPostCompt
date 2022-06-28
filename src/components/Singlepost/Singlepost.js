import React from 'react'
import './singlepost.css'
import writeLogo from './writing.png'
import postimage from './post.png'
import postimage2 from './post2.png'
import shareIcon from './share.png'
import menuIcon from './more.png'
import scopeIcon from './microscope.png'
import userImage from './userImage.jpg'
import userImage2 from './user2.png'

export default function Singlepost() {
  return (<>
    <div className='postContainer d-flex flex-column'>
        <img className='postImage' src={postimage} alt='postimage'/>
        <div className='postTextCont'>
          <div className='articleType'>
            <img className='articleTypeIcon' alt='type'src={writeLogo}></img>Article
          </div>
          <div className='headingCont d-flex flex-row justify-content-between'>
            <div className='postHeading'>
              This is a good class
            </div>
            <img className='headMenu' alt='more' src={menuIcon}></img>
          </div>
          <div className='postDescription'>
          If you set two values, the first one is for the top border, and the second one for the left border. If the second value is omitted, it is copied from the first. If either length is zero, the corner is square, not rounded.
          </div>
          <div className='postFooter d-flex flex-row justify-content-between'>
            <div className='postUser flex-row'>
              <img src={userImage} alt='user' className='userPhoto'></img>
              <div className='userName'>Sarthak Verma</div>
            </div>
            
            <div className='resFootCont d-flex flex-row'>
              <img src={userImage} alt='user' className='userPhotoRes'></img>
              <div className='postUserRes d-flex flex-column'>
                <div className='userNameRes'>Sarthak Verma</div>
                <div className='postViewsRes'>1.4k views</div>
              </div>
            </div>
            <div className='postShareContainer d-flex flex-row'>

              <i class="fa-solid fa-eye eye"></i>
              <div className='postViews'>1.4k views</div>
              
              <div className='postShareIconCont'>
                <img className='postShareIcon' alt='share' src={shareIcon}></img>
              </div>
              <div className='fullShareBox'>
                <img className='postShareIcon' alt='share' src={shareIcon}></img>
                <div className='shareText'>Share</div>
              </div>
            </div>
          </div>
        </div>
    </div>

<div className='postContainer d-flex flex-column'>
<img className='postImage' src={postimage2} alt='postimage'/>
<div className='postTextCont'>
  <div className='articleType'>
    <img className='articleTypeIcon' alt='type'src={scopeIcon}></img>Education
  </div>
  <div className='headingCont d-flex flex-row justify-content-between'>
    <div className='postHeading'>
    Tax Benefits for Investment under National Pension Scheme launched by Government
    </div>
    <img className='headMenu' alt='more' src={menuIcon}></img>
  </div>
  <div className='postDescription'>
  If you set two values, the first one is for the top border, and the second one for the left border. If the second value is omitted, it is copied from the first. If either length is zero, the corner is square, not rounded.
  </div>
  <div className='postFooter d-flex flex-row justify-content-between'>
    <div className='postUser flex-row'>
      <img src={userImage2} alt='user' className='userPhoto'></img>
      <div className='userName'>Sarah West</div>
    </div>
    
    <div className='resFootCont d-flex flex-row'>
      <img src={userImage2} alt='user' className='userPhotoRes'></img>
      <div className='postUserRes d-flex flex-column'>
        <div className='userNameRes'>Sarah West</div>
        <div className='postViewsRes'>1.4k views</div>
      </div>
    </div>
    <div className='postShareContainer d-flex flex-row'>

      <i class="fa-solid fa-eye eye"></i>
      <div className='postViews'>1.4k views</div>
      
      <div className='postShareIconCont'>
        <img className='postShareIcon' alt='share' src={shareIcon}></img>
      </div>
      <div className='fullShareBox'>
        <img className='postShareIcon' alt='share' src={shareIcon}></img>
        <div className='shareText'>Share</div>
      </div>
    </div>
  </div>
</div>
</div>

</>
  )
}
