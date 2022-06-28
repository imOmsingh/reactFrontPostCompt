import React, { useState } from 'react'
import './signup.css'
import facebookIcon from './facebook.png'
import googleIcon from './google.png'
import SignInIcon from './Sign up-pana.svg'
import crossIcon from './cross.png'
import Login from '../login/Login'
export default function Signup(props) {
    
    const [log,setLog] = useState(false);
    
    const setCross = () =>{
        props.closeSign(true)
    }
    
    const popLog = () =>{
        props.closeSign(true)
        if(!log){setLog(true)}
    }


  return (
<>
<div className='opaBack'></div>
    
    <div className='signupContainer'>
    <img className='crossIconSign' src={crossIcon} alt='cross' onClick={setCross}></img>
        <div className='signupHeader'>
            <div className='signupHeaderContent'>
                Let's learn, share and inspire each other with our passion for computer engeneering. Sign up now 
            </div>
        </div>
        <div className='headerMainCOnatiner d-flex flex-row'>
            <div className='signUpDetails d-flex flex-column'>
                <div className='signUpHead'>
                    Create Account
                </div>
                <div className='flexBox d-flex flex-row'>
                    <input className='inputBox' name='firstName' type='text' placeholder='First Name'/>
                    <input className='inputBox' name='lastName' placeholder='Last Name' type='text'/>
                </div>
                <input name='email' placeholder='Email' type='email'/>
                <input name='password' placeholder='Password' type='password'/>
                <input name='confirmPassword' placeholder='Confirm Password' type='password'/>
                <div className='signupButton'>Create Account</div>
                <div className='facebookLogin'><img alt='facebook' style={{height:'15px',width:'15px'}} src={facebookIcon}/>Sign up with Facebook</div>
                <div className='facebookLogin'><img alt= 'google' style={{height:'15px',width:'15px'}} src={googleIcon}/>Sign up with Google</div>
            </div>
            <div className='signUpImage d-flex flex-column'>
                <div className='signInOption'>
                    Already have an account? <span className='gotoLink' onClick={popLog}>Sign In</span>
                </div>
                <div className='signInWidget'>
                    <img className='signInImage' src={SignInIcon} alt='sign-in'/>
                </div>
                <div className='termsAndPolicy'>
                    By signing up, you agree to our Terms and conditions, Privacy policy
                </div>
            </div>

        </div>
      
    </div>
    {log&& <Login/>}
    </>
  )
}
