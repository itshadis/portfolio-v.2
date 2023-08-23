import Form from './Form';
import './index.scss';

function Contact() {

  return (
    <section id='contact'>
      <h1 className='tag'>Contact Me</h1>
      <div className='wrapper'>
        <div className='text'>
          <p>If you're interested work with me, please don't hesitate to contact me. I would be glad to discuss anything related to your project or needs. Thank you for reaching out to me.</p>
        </div>
        <Form />
      </div>
    </section>
  )
}

export default Contact;