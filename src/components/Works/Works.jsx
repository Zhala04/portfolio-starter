import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';

const Works = () => {
  return (
    <div className="works">
         <div className="awesome">
            <span>Works for All these</span> 
            <span>Brands & Clients</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda laboriosam praesentium <br/>
                illum, numquam culpa modi ipsam? Eum omnis eveniet minima! <br/>
                illum, numquam culpa modi ipsam? Eum omnis eveniet minima numquam culpa modi <br/>
                lorem ipsum dolor sit amet, consecteturmodi <br/>
                </span>
               <button className="button s-button">Hire me</button>
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>

        </div>
        <div className="w-right">
            <div className="w-mainCircle">
            <div className="w-secCircle">
                <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt="" />
            </div>
            </div>

            {/* background circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works