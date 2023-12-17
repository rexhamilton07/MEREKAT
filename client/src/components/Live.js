import React, { useState, useEffect } from 'react';
import '../styles/Live.css'

const Live = () => {
  return (
    <div className='LiveDiv'>
      <h2>
        Upcoming Shows
      </h2>
      <h3>Montréal: Bar le Ritz January 24th with Jane's Party</h3>
      <div className='janespartycontainer'>
        <a className= "janesparty" href="https://www.universe.com/events/janes-party-tickets-JL9M6G?ref=ticketmaster&irgwc=1&clickid=0hfTzPU7LxyPWlp1-A0WDRQYUkFSeBVXXRadxk0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272">TICKETS</a>
      </div>
      {/* <div>
        <iframe className='calendar' src="https://calendar.google.com/calendar/embed?src=9adaa745ac01f3bdb4eff0a4922bfc3150f51b471644318d046b89834bc11d9d%40group.calendar.google.com&ctz=America%2FNew_York"></iframe>
      </div> */}
    </div>
  );
};

export default Live;
