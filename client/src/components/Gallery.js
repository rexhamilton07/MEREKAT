import React from 'react';
import '../styles/Gallery.css'
import imgone from '../images/1.jpg'
import imgtwo from '../images/2.jpg'
import imgthree from '../images/3.jpg'
import imgfour from '../images/4.jpg'
import imgfive from '../images/5.jpg'
import imgsix from '../images/6.jpg'
import imgseven from '../images/7.jpg'
import imgeight from '../images/8.jpg'
import imgnine from '../images/9.jpg'
import imgten from '../images/10.jpg'

const Gallery = () => {
  return (
    <div className = 'GalleryDiv'>
        <div className='Gallery'>
            <img src={imgeight}></img>
            <img src={imgtwo}></img>
            <img src={imgthree}></img>
            <img src={imgone}></img>
            <img src={imgfour}></img>
            <img src={imgfive}></img>
            <img src={imgsix}></img>
            <img src={imgseven}></img>
            <img src={imgnine}></img>
            <img src={imgten}></img>
        </div>
    </div>
  );
};

export default Gallery;