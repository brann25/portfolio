import React from 'react'
import './Page_Component.scss'
import introduction from './png/SI520.jpg'
import self from './png/self.png'
export default function Page_Aboutme() {
  return (
    <div className="aboutme-wraper">
        <div className="banner-container">
            <div className="banner-img">
                <div className="project-container-2">
                  <div className="img">
                           <img src={self} alt="" className="intro" style={{width:'60%'}}/>
                  </div>
                  <div className="text">
                  <h1 style={{color:'rgb(0, 110, 229)', fontWeight:'bold'}}>Nice to meet you!</h1>
                            <p style={{color:'grey', fontSize:'1.2em'}}>UX Researcher and designer ∙ Interior Designer ∙ Sketcher</p>
                            <p style={{marginTop:'5%', textAlign:'left', width:'90%'}}> My name is Bannawit, and I go by 'Brann' for short. I am currently a student in the MSI program. at the University of Michigan, Ann Arbor. I was born and raised in Bangkok, Thailand, and went to college there, where I learned more about users and space organization in the physical realm. During this time, I got to learn more about visualizing organization and structural concepts which serve as the backbone of the project at the same time.</p>
                            <p style={{marginTop:'5%', textAlign:'left', width:'90%'}}> I realize that my strength is in the love of studying the relationship between people and design, and how they can blend to create a final product at last. Right now, where I expand my skills to cover and prioritized digitized media, I believe that the knowledge that I have and the skills I gained from years of experience in interior design fields, with courses I take at UMSI would enable these strengths to be even stronger. </p>
                            <p style={{marginTop:'5%', textAlign:'left', width:'90%'}}> If you would like to talk more, please do not hesitate to reach out :)</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
