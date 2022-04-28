import React from 'react'
import './about.css'

function About() {
  return (
    <div className='about'>
      <div className='about-div'>
        <h3 className='about-h3'>
          Our Commitment to Safety + Wellbeing
        </h3>
        <p className='about-p'>
          We continue to closely monitor industry-leading health and safety recommendations and are doing everything we can to ensure the safety of our teams, our community and you. Here are some of the steps we are currently taking:
        </p>
      </div>

      <div className='about-div'>
        <h3 className='about-h3'>
        Vaccine Card
        </h3>
        <p className='about-p'>
        As per the recent provincial mandate, from September 13th, guests will have to present proof of at least one vaccination upon entry to Alice Restaurant. Digital or printed versions of the BC Vaccine Card will be accepted. On October 24, guests will need to show proof of being fully vaccinated in order to dine at Alice Restaurant.
        </p>
      </div>

      <div className='about-div'>
        <h3 className='about-h3'>
        Guest Reservations + Protocol:
        </h3>
        <p className='about-p'>
        Protective masks and facial coverings will have to be worn by all staff and guests. Masks are required at all times at the restaurant unless seated at the table.<br/>
        Reservations are strongly recommended since we are only currently operating at a smaller capacity.

        </p>
      </div>

      <div className='about-div'>
        <h3 className='about-h3'>
        Hygiene + Cleaning Standards:
        </h3>
        <p className='about-p'>
        Our entire restaurant is thoroughly sanitized, deep cleaned, and disinfected on a nightly basis.<br/>
        Guest bathrooms and other <q>high touch</q> areas are monitored and sanitized every 30 minutes.<br/> 
        All tables and chairs are wiped down between use with high-grade government-approved disinfectant.<br/>
        Our staff are required to wear protective face masks during service.
        </p>
      </div>

      <div className='about-div'>
        <h3 className='about-h3'>
        Prevention + Physical Distancing Measures:
        </h3>
        <p className='about-p'>
        Our staff are committed to daily health declarations indicating they are symptom-free.<br/>
        Operating procedures have been revised to fully comply with directives issued by Worksafe BC and the BC Provincial Health Office.
        </p>
      </div>
    </div>
  )
}

export default About