import { useState } from 'react';
import './index.scss';

function Navbar() {
  const [isShow, setIsShow] = useState(false);

  const navlist = ['Home' ,'About', 'Experience', 'Work', 'Contact'];
  
  return (
    <>
      <nav id='home' className='navbar'>
        <h1>kidDev</h1>
        <div onClick={() => {setIsShow(!isShow)}} className='hamburger-list'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul style={{top: isShow ? '0' : '-100%'}} className='navlist'>
          {navlist.map((list, i) => (
            <li onClick={() => {setIsShow(!isShow)}} key={i}><a href={'#'+list.toLowerCase()}>{list}</a></li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar