import React from 'react'
import './sidebar.css'
import locationIcon from './location.png'
import editIcon from './pencil.png'
import errorSign from './warning.png'
import thumbIcon from './Vector.png'
import userImage1 from './f1.png'
import userImage2 from './f2.png'
import userImage3 from './f3.png'
import userImage4 from './f4.png'



export default function Sidebar() {
  return (
    <div className='sidebarContainer'>
        <div className='sidebarContainerTop d-flex flex-row justify-content-between'>
            <div className='sidebarHead d-flex flex-row'>
                <img className='locationIcon' alt='location icon' src={locationIcon}></img>
                <input placeholder='Enter your location' className='locationCity'/>
            </div>
            <div className='locationEdit'>
                <img className='locationEditImg' alt='edit' src={editIcon}></img>
            </div>
        </div>
        <div className='locationAdvice d-flex flex-row'>
            <img className='errorSign' alt='error' src={errorSign}></img>
            <div className='errorDesc'>Your loaction will help us serve better and extend a personalised experience.</div>
        </div>

        <div className='recommendGroupCont flex-column'>
            <div className='groupHeadCont'>
                <img src={thumbIcon} alt='thumb' className='thumbIcon'></img>
                <div className='groupText'>RECOMMENDED GROUPS</div>
            </div>
            <div className='followCont'>
                <div className='followerSuggest'>
                    <div className='followInfo'>
                        <img src={userImage1} alt='user' className='followPhoto'></img>
                        <div className='followName'>Leisure</div>
                    </div>
                <div className='followerButton'>Followed</div> 
                </div>

                <div className='followerSuggest'>
                    <div className='followInfo'>
                        <img src={userImage2} alt='user' className='followPhoto'></img>
                        <div className='followName'>Activism</div>
                    </div>
                <div className='followButton'>Follow</div> 
                </div>

                <div className='followerSuggest'>
                    <div className='followInfo'>
                        <img src={userImage3} alt='user' className='followPhoto'></img>
                        <div className='followName'>MBA</div>
                    </div>
                <div className='followButton'>Follow</div> 
                </div>

                <div className='followerSuggest'>
                    <div className='followInfo'>
                        <img src={userImage4} alt='user' className='followPhoto'></img>
                        <div className='followName'>Philosphy</div>
                    </div>
                <div className='followButton'>Follow</div> 
                </div>

            </div>

        </div>
        


    </div>
  )
}
