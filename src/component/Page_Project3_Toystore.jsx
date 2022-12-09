import React from 'react'
import IAP1 from './intarch-projects/IAP3_01.jpg'
import IAP2 from './intarch-projects/IAP3_02.jpg'

export default function Page_Project3_Toystore() {
  return (
    <div className="aboutme-wraper">
    <div className="portfolio1">
      <img src={IAP1} alt="" className="IAP"/>
      <img src={IAP2} alt="" className="IAP"/>
    </div>
  </div>
  )
}
