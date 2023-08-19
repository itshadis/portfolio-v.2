import './index.scss';

function Hero() {
  return (
    <section id='hero'>
      <div className='hero-details'>
        <p>Hello there, I am</p>
        <h1>Hadis</h1>
        <p>A fullsatck Web Developer,</p>
        <p>Based on Tangerang, Indonesia</p>
        <div>My Resume</div>
      </div>

      <div className='foto-wrapper'>
        <div className='foto-box'>
          <img className='foto' src="./public/asd2.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero;