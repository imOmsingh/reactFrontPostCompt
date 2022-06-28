import React, { useState } from 'react'
import './navbar.css'
import logo from './atg logo.png'
import userImage from './userImage.png'
import Signup from '../signup/Signup'
export default function Navbar( props ) {

  const [user, setUser] = useState(false);
  const [clas, setClas] = useState('userChange1Button');
  const [sign,setSign] = useState(false);




  const changeUser = () =>{
    if(user){setUser(false) 
      setClas('userChange1Button')}
    else{setUser(true)
      setClas('userChange2Button')}
  }

  const popSign = () => {
    console.log(sign)
    if(!sign){setSign(true)}
  }

  const closeSign = (sign) =>{
    if(sign){setSign(false)}
  }


  

  return (
    <div>
      <div className='navConatainer d-flex flex-row justify-content-around'>
        <div className='logoImg'>
            <img src={logo} alt='websiteLogo'/>
        </div>
        <div className='searchBox flex-row'>
            <i class="fa-solid fa-magnifying-glass seachIcon" ></i>    
            <div className='searchText'>Search for your favourite groups in ATG</div>
        </div>
        <div className={clas} onClick={changeUser}>
          Log
        </div>
        {
          user?
        <div className='postUser flex-row'>
          <img src={userImage} alt='user' className='userPhoto'></img>
          <div className='userName'>Siddharth Goyal</div>
          <i class="fa-solid fa-caret-down downIconUser"></i>
        </div>
      :
        <div className='userAccountBox'>
            <div className='accountText'>Create account. <span className='userLogLink' onClick={popSign}>it's free!</span>
              <i class="fa-solid fa-angle-down downIcon"></i>
            </div>
        </div> 

        }

        
        
       
        <div className='userAccountBoxRes'>
            <div className='accountText userLogLink'>Create account. 
        </div>
        </div>
      </div>

      {
          sign && <Signup closeSign={closeSign}/>
        }
    </div>
  )
}
