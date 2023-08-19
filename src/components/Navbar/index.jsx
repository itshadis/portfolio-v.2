import './index.scss';

function Navbar() {
  const navlist = ['Home' ,'About', 'Experience', 'Work', 'Contact'];

  return (
    <nav id='navbar'>
      <h1>kidDev</h1>
      <ul className='navlist'>
        {navlist.map((list, i) => (
          <li key={i}>{list}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar