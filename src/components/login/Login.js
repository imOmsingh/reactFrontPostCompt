import React from 'react'
import './login.css'
import facebookIcon from './facebook.png'
import googleIcon from './google.png'
import SignInIcon from './Tablet login-pana.svg'
import crossIcon from './cross.png'
export default function Login() {
  return (
    <>
    <div className='opaBack'></div>
    <div className='signupContainer'>
    <img className='crossIcon' src={crossIcon} alt='cross'></img>
        <div className='signupHeader'>
            <div className='signupHeaderContent'>
                Let's learn, share and inspire each other with our passion for computer engeneering. Sign up now 
            </div>
        </div>
        <div className='headerMainCOnatiner d-flex flex-row'>
            <div className='signUpDetails d-flex flex-column'>
                <div className='signUpHead'>
                    Sign In
                </div>
                <input name='email' placeholder='Email' type='email'/>
                <input name='password' placeholder='Password' type='password'/>
                <div className='signupButton'>Sign In</div>
                <div className='facebookLogin'><img alt='facebook' style={{height:'15px',width:'15px'}} src={facebookIcon}/>Sign up with Facebook</div>
                <div className='facebookLogin'><img alt= 'google' style={{height:'15px',width:'15px'}} src={googleIcon}/>Sign up with Google</div>
                <div className='forgotPass'>Forgot Password?</div>
            </div>
            
            <div className='signUpImage d-flex flex-column'>
                <div className='signInOption'>
                    Don't have an account ye? <span className='gotoLink'>Create new for free!</span>
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
    </>
  )
}
