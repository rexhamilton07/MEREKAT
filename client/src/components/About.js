import React, { useState, useEffect } from 'react';
import '../styles/About.css'
import Seb from '../images/seb.jpg';
import Dre from '../images/dre.jpg';
import Lucas from '../images/lucas.jpg';
import Rex from '../images/rex.jpg';

const About = () => {
  return (
    <div className='AboutDiv'>
      <p>
        MEREKAT is Sebastian and Lucas Brabant, Andreas Fauqier and Rex Hamilton. 
      </p>
      <br>
      </br>
      <br>
      </br>
      <p>
      MEREKAT is a Montreal based band founded in September 2021. Originating in a dingy basement, the band started as a spontaneous idea between three dudes who met in university dorms. Equipped with a second hand drum kit, a battery powered mini-amp, they began learning songs and performing short sets for friends. Now recording music and performing live on the regular, the band is working towards releasing their debut EP in April 2024. 

      </p>
      <div className = 'bandimages'>
        <div className='seb'>
          <img src={Seb}/>
          <p>Sebastian Brabant (Vocals, Guitar)</p>
        </div>
        <div className='dre'>
          <img src={Dre}/>
          <p>Andreas Fauqier (Guitar)</p>
        </div>
        <div className='lucas'>
          <img src={Lucas}/>
          <p>Lucas Brabant (Bass)</p>
        </div>
        <div className='rex'>
          <img src={Rex}/>
          <p>Rex Hamilton (Drums)</p>
        </div>
      </div>
    </div>
  );
};

export default About;
