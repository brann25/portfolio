import React from 'react'
import './Page_Landing.scss';
import { Link } from 'react-router-dom';
//images
import headerBg from './svg/landing-page-bg.svg'
import gDrive from './svg/Gdriveicon.svg'
import walkingGif from './svg/figure_walk.gif'
import p1Banner from './svg/p1-banner.svg'
import p2Banner from './svg/p2-banner.svg'
import p3Banner from './svg/p3-banner.svg'


export default function Page_Landing() {
  return (
    <>
    <div className="page-wrapper">
        <div className="header-wraper">
            <div className="banner-container">
                <div className="banner-text-container">
                    <img src={headerBg} alt="" className="headerBg" />
                    <img src={walkingGif} alt="" className="walking" />
                    <div className="title-box">
                        <h4 style={{marginBottom:'-1%'}}> Bannawit</h4>
                        <h1 style={{fontSize:'5.5em', marginLeft:'-0.6%', fontWeight:'bold'}}>BRANN</h1>
                        <h4 style={{marginTop:'-2%'}}> Khattiyanont</h4>
                        <p style={{marginTop:'1.5em'}}>I'm an UX researcher and designer</p>
                        <p>with a skill in visualization and user</p>
                        <p>empathise from interior architecure</p>
                        <p>background. More details?</p>
                        <div className="resume-link" style={{marginTop:'1.5em'}}> 
                            <p>Let's check my</p>
                            <a className="resume" href="http://google.com" target="_blank" rel="noopener noreferrer">
                                <h5>Resume</h5>
                            </a>
                        </div>
                        <p style={{fontSize:'1.05em', marginTop:'-2.8%', marginLeft:'-0.3%'}}>(on Google-Drive)</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="body-wrapper">
            <div className="section-divider">
                <div className="section-divider-text">
                    sliding divider - ux project section
                </div>
            </div>
            <div className="project-container-1">
            <div className="project-box">
                <div className="project-l">
                    <img src={p1Banner} alt="" className="project-banner" style={{width:'100%'}}/>
                </div>
                <div className="project-r">
                    <p>Primary-Showcase 1</p>
                    <a href=""><Link to ='/shareo'>></Link></a>
                </div>
                </div>
            </div>
            <div className="project-container-2">
                <div className="project-box">
                    <div className="project-l">
                        <img src={p2Banner} alt="" className="project-banner" />
                    </div>
                    <div className="project-r">
                        <p>Secondary-Showcase 1</p>
                        <a href=""><Link to ='/shareo'>></Link></a>
                    </div>
                </div>
                <div className="project-box">
                    <div className="project-l">
                        <img src={p3Banner} alt="" className="project-banner" />
                    </div>
                    <div className="project-r">
                        <p>Secondary-Showcase 1</p>
                        <a href=""><Link to ='/shareo'>></Link></a>
                    </div>
                </div>
            </div>
            <div className="section-divider">
                <div className="section-divider-text">
                    sliding divider - - interior architecture + illustrator section
                </div>
            </div>
            <div className="project-container-3">
                <div className="project-box">
                    <p>Tretiary-Showcase 1</p>
                </div>
                <div className="project-box">
                    <p>Tretiary-Showcase 2</p>
                </div>
                <div className="project-box">
                    <p>Tretiary-Showcase 3</p>
                </div>
                <div className="project-box">
                    <p>Tretiary-Showcase 4</p>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}
