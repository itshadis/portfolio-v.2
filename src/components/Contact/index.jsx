import Form from './Form';
import './index.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

function Contact() {

  return (
    <section id='contact'>
      <h1 className='tag'>Contact Me</h1>
      <div className='wrapper'>
        <div className='text'>
          <p>If you're interested work with me, please don't hesitate to contact me. I would be glad to discuss anything related to your project or needs. Thank you for reaching out to me.</p>
          <ul>
            <li><a href="https://github.com/itshadis" target='_blank'><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/itshadis" target='_blank'><FaLinkedin /></a></li>
            <li><a href="https://twitter.com/hadis_sft" target='_blank'><BsTwitter /></a></li>
          </ul>
        </div>
        <Form />
      </div>
    </section>
  )
}

export default Contact;