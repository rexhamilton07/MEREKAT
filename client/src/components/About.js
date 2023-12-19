import React, { useState, useEffect } from 'react';
import '../styles/About.css'
import Seb from '../images/seb.jpg';
import Dre from '../images/dre.jpg';
import Lucas from '../images/lucas.jpg';
import Rex from '../images/rex.jpg';

const About = () => {
  return (
    <div className='AboutDiv'>
      <h2>Contact: mail@merekat.tv</h2>
      <br>
      </br>
      <p className = "bio">
        MEREKAT is the brainchild of Sebastian and Lucas Brabant, Andreas Fauquier and Rex Hamilton. Founded in 2021, the bandmates met as students at McGill University and pulled together what instruments they could find in a friend's moldy basement to begin crafting music that draws inspiration from the energy of The Strokes, the melodies of Arctic Monkeys, and the authenticity of Oasis.
        <br></br><br></br>Over the last few years, the intimate venues of Montréal have served as both their workshop and canvas, where the band experiments with the infectious energy that defines their live performances and lyrics on the elation and torment of contemporary youth. 
        In recent months, the band has begun to release their work, beginning with debut single "Another One" in August and follow-up "talking thru a smile" in November, the latter of which was featured on Spotify's editorial playlist <i>Fresh Finds Canada</i>. 
        The band is fortunate to have received funding from FACTOR Canada, which is going towards their debut EP to be released mid-2024. 
      </p>
      <div className = 'bandimages'>
        <div className='member'>
          <img src={Seb}/>
          <p>Sebastian Brabant (Vocals, Guitar)</p>
        </div>
        <div className='member'>
          <img src={Dre}/>
          <p>Andreas Fauquier (Guitar)</p>
        </div>
        <div className='member'>
          <img src={Lucas}/>
          <p>Lucas Brabant (Bass)</p>
        </div>
        <div className='member'>
          <img src={Rex}/>
          <p>Rex Hamilton (Drums)</p>
        </div>
      </div>
    </div>
  );
};

export default About;
