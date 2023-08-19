import Tag from '../Tag';
import './index.scss';

function About() {
  return (
    <section id='about'>
      <h1 className='tag'>Who Am I?</h1>
      <div className='about-wrapper'>
        <div className='foto-wrapper'>
          <div className='foto-box'>
            <img className='foto' src="/asd2.png" alt="" />
          </div>
        </div>

        <div className='about-me-wrapper'>
          <div className='about-me'>
            <p>Hi, my name is Hadis and i have recently completed a Bachelor of Computer Science, majoring in Informatics Engineering at Pamulang University.
            </p>
            <p>I have passion for all things technology especially programming. I love coding, its a pride of being able to translate ideas into code. Now i'm so enthusiast with React.js for developing of front-end web applications.
            </p>
            <p>I also go by Back-End Developer or Full Stack Developer.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;