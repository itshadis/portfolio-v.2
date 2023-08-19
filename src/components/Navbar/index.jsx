import './index.scss';

function Navbar() {
  const navlist = ['Home' ,'About', 'Experience', 'Work', 'Contact'];
  
  return (
    <nav id='home' className='navbar'>
      <h1>kidDev</h1>
      <ul className='navlist'>
        {navlist.map((list, i) => (
          <li key={i}><a href={'#'+list.toLowerCase()}>{list}</a></li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar