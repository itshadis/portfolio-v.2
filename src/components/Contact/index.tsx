'use client';

import Form from './Form';
import './index.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

function Contact() {
  const waNumber = process.env.NEXT_PUBLIC_NO_WA || '';

  return (
    <section id="contact">
      <h1 className="tag">Contact Me</h1>
      <div className="wrapper">
        <div className="text">
          <p>
            If you're interested work with me, please don't hesitate to contact me. I would be glad to discuss anything related to your project or needs. Thank you for reaching out to me.
          </p>
          <ul>
            <li>
              <a href="https://github.com/itshadis" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/itshadis" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="mailto:hadis1098@gmail.com" target="_blank" rel="noopener noreferrer">
                <MdEmail />
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer">
                <RiWhatsappFill />
              </a>
            </li>
          </ul>
        </div>
        <Form />
      </div>
    </section>
  );
}

export default Contact;
