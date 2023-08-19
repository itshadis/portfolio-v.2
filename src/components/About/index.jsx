import Tag from '../Tag';
import './index.scss';

function About() {
  return (
    <section id='about'>
      <Tag tag={'#About Me'} />
      <div className='about-me'>
        <p>Hi, my name is Hadis and i have recently completed a Bachelor of Computer Science, majoring in Informatics Engineering at Pamulang University. I </p>
      </div>
    </section>
  )
}

export default About;