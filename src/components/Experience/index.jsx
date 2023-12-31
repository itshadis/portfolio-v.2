import './index.scss';

function Exprerience() {
  const exp = [
    {
      title: 'Cintessa Academy Bootcamp',
      date: 'Jul, 2023 - Aug, 2023',
      course: 'Course : Front-End Web Development (React.js)',
      status: 'Graduated',
      describe: 'A month deepening my reactjs skilll with industrials best practice. Among its best structur foldering, redux as state management, moduling react components and practice how to consume api.'
    },
    {
      title: 'Harisenin Bootcamp',
      date: 'May, 2023 - Present',
      course: 'Full Stack Web Development (MySQL, Express, React, Node)',
      status: 'Ungraduated',
      describe: `Fully learn how to be full web development with MERN stack. Learning most popular web stack at the moment such React.js for front-end development, Node.js and Express.js for back-end development, MySQL as the second most popular SQL databases.`
    }
  ]

  return (
    <section id='experience'>
      <h1 className='tag'>My Experience</h1>
      <div className='experience-wrapper'>
        <div className='line'></div>
        <div className='line2'></div>
        <div className='card-container'>
          <div className='card-wrapper'>
            <span className='node'></span>
            <span className='date'>{exp[0].date}</span>
            <div className='card'>
              <h4 className='title'>{exp[0].title}<span className='status'>{' (' + exp[0].status + ')'}</span></h4>
              <p className='course'>{exp[0].course}</p>
              <hr />
              <p className='describe'>{exp[0].describe}</p>
            </div>
          </div>
        </div>

        <div className='card-container'>
          <div className='card-wrapper2'>
            <span className='node2'></span>
            <span className='date2'>{exp[1].date}</span>
            <div className='card2'>
              <h4 className='title'>{exp[1].title} <span className='status'>{'('+ exp[1].status + ')'}</span></h4>
              <p className='course'>{exp[1].course}</p>
              <hr />
              <p className='describe'>{exp[1].describe}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exprerience;