import React from 'react'
import './Hero.css'
import Picture1 from '../../assets/Picture1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={Picture1} alt="" className='profile-img' />
      {/* <img src={Picture1} alt="" className='profile-img' /> */}

      <h1><span>I'm Dnyaneshwari Nagapure,</span> a professional frontend developer.</h1>
      <p>I am a Frontend Developer with over 3.5 years of experience, specializing in React.js, and have a proven track record of delivering high-quality front-end solutions across multiple companies.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
