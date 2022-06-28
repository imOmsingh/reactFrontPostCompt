import React from 'react'
import './heroImage.css'
export default function HeroImage() {
  return (
    <div className='heroContainer'>
        <div className='heroImageMask'></div>
        <div className='joinNowCont'>
          Join Group
        </div>
        <div className='heroHeadingContainer'>
            <div className='heroMainHeading'>
                Computer Engineering
            </div>
            <div className='heroMainSubHeading'>
                142,765 Computer Engineers follow this
            </div>
        </div>
    </div>
  )
}
