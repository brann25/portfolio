import React from 'react'
import IAP1 from './intarch-projects/IAP1_01.jpg'
import IAP2 from './intarch-projects/IAP1_02.jpg'
import IAP3 from './intarch-projects/IAP1_03.jpg'
import IAP4 from './intarch-projects/IAP1_04.jpg'
import IAP5 from './intarch-projects/IAP1_05.jpg'


export default function Page_Project3_Natlib() {
  return (
    <div className="aboutme-wraper">
      <div className="portfolio1">
        <img src={IAP1} alt="" className="IAP"/>
        <img src={IAP2} alt="" className="IAP"/>
        <img src={IAP3} alt="" className="IAP"/>
        <img src={IAP4} alt="" className="IAP"/>
        <img src={IAP5} alt="" className="IAP"/>
      </div>
    </div>
  )
}

