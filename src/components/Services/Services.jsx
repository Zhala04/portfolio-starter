import React from 'react';
import './Services.css';
import Card from '../Card/Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Resume from '../../img/resume.jpg';

const Services = () => {
  return (
    <div className="services">
        {/* the left side: */}
        <div className="awesome">
            <span>My Awesome</span> 
            <span>services</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda laboriosam praesentium <br/>
                illum, numquam culpa modi ipsam? Eum omnis eveniet minima!</span>
                <a href={Resume} download><button className="button s-button">Download CV</button></a>
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>

        </div>

        {/* the right side: */}
        <div className="cards">
            <div style={{left:'14rem'}}>
                <Card
                emoji={HeartEmoji}
                heading='Design'
                detail="Figma,Sketch,Photoshop, Adobe, Adobe xd"
                />
            </div>
            <div style={{top:'12rem', left:'-4rem'}} >
                <Card
                emoji={Glasses}
                heading='Developer'
                detail='Html, Css, JavaScript, React'
                />
            </div>
            <div style={{top:'19rem', left:'12rem'}} >
                <Card
                emoji={Humble}
                heading='UI/UX'
                detail='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda 
                illum, numquam culpa modi ipsam'
                />
            </div>
            <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services