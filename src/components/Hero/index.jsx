import CV from './CV';
import './index.scss';

function Hero() {
  return (
    <section id='hero'>
      <div className='hero-details'>
        <p>Hello there, I am</p>
        <h1>Hadis</h1>
        <p>A Front-End Web Developer,</p>
        <p>Based on Tangerang, Indonesia.</p>
      </div>

      <CV />
    </section>
  )
}

export default Hero;