import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src= "https://camo.githubusercontent.com/19db51af5f90f1b152bc0b9078f5fe97053955be5074f03f17019c70345bdcdb/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966" alt="" />
            </div>
            <div className="about-right">
              <div className="about-para">
                <p>I am a Frontend developer with over 2 years of experience.</p>
                <p>My passion lies in crafting beautiful and intuitive user experiences.</p>

              </div>
              <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Node Js</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"50%"}} /></div>

              </div>
            </div>
        </div>
        <div className="about-achivements">
          <div className="about-achivement">
            <h1>10+</h1>
            <p>Years of Experience</p>
          </div>
          <hr />
          <div className="about-achivement">
            <h1>20+</h1>
            <p>PROJECTS COMPELETED</p>
          </div>
          <hr />
          <div className="about-achivement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
         </div>
      
    </div>
  )
}

export default About
