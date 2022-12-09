import React from 'react'
import { useLayoutEffect } from 'react';
import './Page_Landing.scss';
import { Link } from 'react-router-dom';
//images
import headerBg from './svg/landing-page-bg.svg'
import arrow from '../component/svg/Arrow.svg'
import gDrive from './svg/Gdriveicon.svg'
import walkingGif from './svg/figure_walk.gif'
import p1Banner from './svg/p1-banner.svg'
import p2Banner from './svg/p2-banner.svg'
import p3Banner from './svg/p3-banner.svg'
import pt1Banner from './svg/natlib.svg'
import pt2Banner from './svg/cinema.svg'
import pt3Banner from './svg/toyshop.svg'
import pt4Banner from './svg/graphicdsgn.svg'

export default function Page_Landing() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
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
                        <p>with skills in visualization and user</p>
                        <p>empathise from interior architecure</p>
                        <p>background. More details?</p>
                        <div className="resume-link" style={{marginTop:'1.5em'}}> 
                            <p>Let's check my</p>
                            <a className="resume" href="https://drive.google.com/file/d/1EIMSjyeSLVwCbKiuGjpdFgOJLSAve2El/view?usp=share_link" target="_blank" rel="noopener noreferrer">
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
                    UX Project Section
                </div>
            </div>
            <div className="project-container-1">
                <div className="project-box">
                        <div className="project-l">
                            <img src={p1Banner} alt="" className="project-banner" style={{width:'100%'}}/>
                        </div>
                        <div className="project-r" style={{marginLeft: '15%'}}>
                            <h1 style={{color:'#F48020', fontWeight:'bold'}}>Shareo</h1>
                            <h4 style={{marginTop:'-1.5%'}}>Make sharing fulfilling!</h4>
                            <p style={{color:'grey'}}>UXR-UXD ∙ Individual ∙ Academic</p>
                            <p style={{marginTop:'5%', width:'80%'}}>Shareo is a prototype project that aimed to tackle nutrition and food variety issues for university students by creating comunity-based solutions to share ingredients and host kitchens for cooking together. </p>
                            <a href=""><Link to ='/shareo' onClick={useLayoutEffect}><img src={arrow} alt="" className="goButton" style={{marginTop:'5%',width:"5%"}}/></Link></a>
                            {/* <p className="goButton" style={{marginTop:'5%', textAlign:'center'}}>></p> */}
                        </div>
                </div>
            </div>
            <div className="project-container-2">
                <div className="project-box">
                    <div className="project-l">
                        <img src={p2Banner} alt="" className="project-banner" />
                    </div>
                    <div className="project-r">
                            <h1 style={{color:'#3B7F67', fontWeight:'bold'}}>Travbudd</h1>
                            <h4 style={{marginTop:'-1.5%', fontSize:'120%'}}>Informed travellers!</h4>
                            <p style={{color:'grey'}}>UXD ∙ Individual ∙ Personal</p>
                            <p style={{marginTop:'5%', textAlign:'left', width:'90%'}}> Travbudd is the sprint project for an app to create guidlines for safe travel.</p>
                            <p className="goButton" style={{marginTop:'5%', width:'70%', backgroundColor:'lightgrey', textAlign:'center', fontSize:'1em'}}>Under Progess</p>
                    </div>
                </div>
                <div className="project-box">
                    <div className="project-l">
                        <img src={p3Banner} alt="" className="project-banner" />
                    </div>
                    <div className="project-r">
                            <h1 style={{color:'#F93267', fontWeight:'bold'}}>Archilens</h1>
                            <h4 style={{marginTop:'-1.5%', fontSize:'120%'}}>Structure Revision!</h4>
                            <p style={{color:'grey'}}>UXD ∙ Individual ∙ Personal</p>
                            <p style={{marginTop:'5%', textAlign:'left', width:'90%'}}> Research and design project to find new XR tool that match architecture preference.</p>
                            <p className="goButton" style={{marginTop:'5%', width:'70%', backgroundColor:'lightgrey', textAlign:'center', fontSize:'1em'}}>Under Progess</p>                    </div>
                    </div>
            </div>
            <div className="section-divider">
                <div className="section-divider-text">
                    Interior Architecture and Illustration Project Section
                </div>
            </div>
            <div className="project-container-3">
                <div className="project-box-tretiary">
                    <img src={pt1Banner} style={{width:'83%'}} alt="" />
                    <h4 style={{marginTop:'2em', fontWeight:'bold'}}>National Library</h4>
                    <p style={{marginTop:'-0.5em'}} > of Thailand</p>
                    <p style={{color:'grey',marginTop:'-0.8em'}}>IA ∙ Individual ∙ Academic</p>
                    <a href="" onClick={useLayoutEffect}><Link to ='/natlibth'><img src={arrow} alt="" className="goButton" style={{marginTop:'5%',width:"7%"}}/></Link></a>
                </div>
                <div className="project-box-tretiary">
                    <img src={pt2Banner} style={{width:'68.8%'}} alt="" />
                    <h4 style={{marginTop:'2em', fontWeight:'bold'}}>Waltermart Cinema</h4>
                    <p style={{marginTop:'-0.5em'}} > Makati, the Philippines</p>
                    <p style={{color:'grey',marginTop:'-0.8em'}}>Interior ∙ r/iQ ∙ Professional </p>
                    <p className="goButton" style={{marginTop:'5%', marginLeft:'15%', width:'70%', backgroundColor:'lightgrey', textAlign:'center', fontSize:'1em'}}>Coming Soon</p>
                    {/* <a href=""><Link to ='/cinema'><img src={arrow} alt="" className="goButton" style={{marginTop:'5%',width:"7%"}}/></Link></a> */}
                </div>
                <div className="project-box-tretiary">
                    <img src={pt3Banner} style={{width:'81%', marginTop:'13%'}} alt="" />
                    <h4 style={{marginTop:'2em', fontWeight:'bold'}}>Toy Store</h4>
                    <p style={{marginTop:'-0.5em'}} > Shanghai, China</p>
                    <p style={{color:'grey',marginTop:'-0.8em'}}>Interior ∙ r/iQ ∙ Professional </p>
                    <a href="" onClick={useLayoutEffect}><Link to ='/toystore'><img src={arrow} alt="" className="goButton" style={{marginTop:'5%',width:"7%"}}/></Link></a>
                </div>
                <div className="project-box-tretiary">
                    <img src={pt4Banner} style={{width:'43.5%', marginTop:'13%'}} alt="" />
                    <h4 style={{marginTop:'2em', fontWeight:'bold'}}>100-Day Works</h4>
                    <p style={{marginTop:'-0.5em'}} > Ann Arbor, MI, USA</p>
                    <p style={{color:'grey',marginTop:'-0.8em'}}>Illustration ∙ Individual∙ Academic </p>
                    <p className="goButton" style={{marginTop:'5%', marginLeft:'15%', width:'70%', backgroundColor:'lightgrey', textAlign:'center', fontSize:'1em'}}>Coming Soon</p>
                    {/* <a href=""><Link to ='/illustration'><img src={arrow} alt="" className="goButton" style={{marginTop:'5%',width:"7%"}}/></Link></a> */}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
