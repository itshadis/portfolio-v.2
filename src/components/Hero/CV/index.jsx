import { useState } from 'react';
import './index.scss';

function CV() {
  const [fade, setFade] = useState()

  const handleMouseEnter = () => {
    setFade('fadeIn');
  }

  const handleMouseOut = () => {
    setFade('');
  }

  return (
    <div className='cv-wrapper'>
      <div className='circle-1'>
        <span></span>
        <span></span>
      </div>
      <div className='circle-2'>
        <span></span>
        <span></span>
        <span className={fade}></span>
        <a href='/documents/cv_hadis.pdf' onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} download>Download CV</a>
      </div>
    </div>
  )
}

export default CV;