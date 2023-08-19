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

  const handleClick = (e) => {
    e.preventDefault()
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
        <button onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} onClick={handleClick} >Download CV</button>
      </div>
    </div>
  )
}

export default CV;