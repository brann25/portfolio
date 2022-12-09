import React from 'react'
import './dec/Dec_Main.scss';
import icon1 from './svg/icon1.svg'
import icon2 from './svg/icon2.png'
import gDrive from './svg/Gdriveicon.svg'

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="contact-info">
          <p>Bannawit@umich.edu</p>
          <p>Ann Arbor, MI</p>
          <p>______________________________________</p>
          <p>copyright © 2022 Bannawit Khattiyanont </p>
      </div>
      <div className="social-media">
          <a href='https://www.linkedin.com/in/bannawit-brann-khatiiyanont/' target="_blank" rel="noopener noreferrer"><img src={icon1}  style={{width:'5%'}}alt="" className="icon1" /></a>
          <a href='mailto:bannawit@umich.edu'><img src={icon2}  style={{width:'5%'}}alt="" className="icon2"/></a>
          <a href="https://drive.google.com/file/d/1EIMSjyeSLVwCbKiuGjpdFgOJLSAve2El/view?usp=share_link" target="_blank" rel="noopener noreferrer"><img src={gDrive}  style={{width:'5%', color:'black'}}alt="" className="icon2"/></a>
      </div>
  </div>
  )
}
