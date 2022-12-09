import React from 'react';
import './dec/Dec_Main.scss';
import webBanner from '../component/svg/banner_web.svg'
import ipadBanner from '../component/svg/smaller_banner.svg'
import logo from '../component/svg/logo_header.svg'
import p1Banner from '../component/svg/p1-banner.svg'
import p2Banner from '../component/svg/p2-banner.svg'
import p3Banner from '../component/svg/p3-banner.svg'
import walkingGif from '../component/svg/figure_walk.gif'
import icon1 from '../component/svg/icon1.svg'
import icon2 from '../component/svg/icon2.png'
import arrow from '../component/svg/Arrow.svg'
import arrowExpand from '../component/svg/arrow-expand.svg'

export default function MainFrame() {
  return (
    <div className="mainframe-container">

        <div className="full-screen">
            <div className="header">
                <img src={webBanner} alt="" className="banner-web" />
                <img src={walkingGif} alt="" className="walking" />
                <a href='https://www.linkedin.com/in/bannawit-khatiiyanont-742906257/'><img src={icon1} alt="" className="icon1" href='http://www.google.com'/></a>
                <img src={icon2} alt="" className="icon2" />
                {/* <a href="" className="talk2me">let's talk!</a> */}
                <div className="intro-text">
                    <h1 id="headline">Nice to see you here!</h1>
                    <h4 id="tagline">I design physical and digitized environments</h4>
                    <h4 id="introduction">Currently, MSI at the University of Michigan</h4>
                    {/* <h4 className="job">UXD/R | Developer</h4> */}
                        <div className="b1">
                            <a id="button1" href="https://drive.google.com/file/d/1Inj_o_h1TxBQoSo0EpQ8KPBo853uD7Lm/view?usp=share_link">resume</a>
                        </div>
                </div>
            </div>
        </div>

        <div className="smaller-display">
            <img src={logo} alt="" className="sd-logo" />
            <img src={ipadBanner} alt="" className="sd-banner" />
            <div className="sd-text-wrap">
                <h1 id="headline">Nice to see you here!</h1>
                <h4 id="tagline">Let’s transform digital spaces with empathy</h4>
                <div className="sd-b1">
                    <a href="https://drive.google.com/file/d/1Inj_o_h1TxBQoSo0EpQ8KPBo853uD7Lm/view?usp=share_link">resume</a>
                </div>
            </div>
        </div>
        <div className="main-project_container">
            <div className="project-container">
                <div className="project_section">
                    <span class="project_section_title">________UX_PROJECTS________</span>
                </div>
                <div className="project">
                    {/* <h1>Shario Application</h1> */}
                    <div className="p-card">
                        <img src={p1Banner} alt='' className=''/>
                        <div className="text-card">
                            <h1>SHAREO</h1>
                            <h3 style={{marginTop:'-1.8%'}}>Making food acceesible!</h3>
                            <p style={{color:'lightgray'}}>UXR-UXD Project | Individual Academic Project</p>
                            <p style={{marginTop:'3%'}}>testtesttesttesttesttesttesttesttesttesttesttestteststtesttesttestteststtesttesttesttest</p>
                            <p>testtesttesttesttesttesttesttesttesttesttesttestteststtesttesttestteststtesttesttesttest</p>
                            <p>testtesttesttesttesttesttesttesttesttesttesttestteststtesttesttestteststtesttesttesttest</p>
                            <a className='arrow'><img src={arrow} style={{width:'3.0%', paddingTop:'3%'}} /></a>
                        </div>
                    </div>
                </div>
                <div className="ux-etc__project">
                    <div className="project_ux-etc">
                        <div className="p-card2">
                            <img src={p2Banner} alt='' className=''/>
                            <div className="text-card">
                                <h1>TRAVBUDD</h1>
                                <h3 style={{marginTop:'-5%'}}>Travel with confidence</h3>
                                <p style={{color:'rgb(174, 174, 174)'}}>UXD Project | Personal Project</p>
                                <p style={{marginTop:'9%'}}>testtesttesttesttesttesttestttttesttest</p>
                                <p>testtesttesttesttesttesttestttttesttest</p>
                                <p style={{marginBottom:'10%'}}>testtesttesttesttesttesttestttttesttest</p>
                                <a href="http://www.google.com"><img className='plink' src={arrow} style={{width:'8%'}}/></a>
                            </div>
                        </div>
                    </div>
                    <div className="project_ux-etc">
                    <div className="p-card2">
                            <img src={p3Banner} alt='' className=''/>
                            <div className="text-card">
                                <h1>ARCHILENS</h1>
                                <h3 style={{marginTop:'-5%'}}>Enhancing visualize learning</h3>
                                <p style={{color:'lightgray'}}>UXR-UXD Project | Personal Project</p>
                                <p style={{marginTop:'9%'}}>testtesttesttesttesttesttestttttesttest</p>
                                <p>testtesttesttesttesttesttestttttesttest</p>
                                <p style={{marginBottom:'10%'}}>testtesttesttesttesttesttestttttesttest</p>
                                <a href="http://www.google.com"><img className='plink' src={arrow} style={{width:'8%'}}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project_section">
            <span class="project_section_title">________CREATIVE_WORKS________</span>
            </div>
            <div className="arch-project-container">
                <div className="arch-nav">
                    <div className="arch-project">
                        Naitonal Library
                    </div>
                    <div className="arch-project">
                        True Tassana
                    </div>
                    <div className="arch-project">
                        Kidswant
                    </div>
                    <div className="arch-project">
                        Illustration
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="footer-text-wraper">
            <p>Let's work together</p>
                <div className="footer-text-main">
                <h2>Bannawit@umich.edu</h2>
                </div>
            <p>Ann Arbor, MI 48103</p>
            <p>Copy-right: Bannawit Khattiyanont</p>
            </div>
        </div>
    </div>
  )
}
