import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import ListWorks from './ListWorks';
import './index.scss';

function Work() {
  const works = [
    {
      img: '/self-order.png',
      title: 'Orderin',
      detail: `A simple self-order McDonald's clone that purpose to ease customers to ordering and without having to queue. The customer that have been ordering will get the code which will be given to the cashier to confirm the payment.`,
      stack: [<FaReact />, <SiTailwindcss />, <FaNodeJs />, <SiExpress />],
      link: 'https://its-orderin.netlify.app'
    },
    {
      img: '/muvi.png',
      title: 'Muvi',
      detail: `An application that displays a list of the latest movies from around the world along with detailed information about each movie. This application provides movies sorted into categories such as 'Trending Today', 'Top Rated', and 'Upcoming'. Additionally, you have the option to search for a specific movie of your choice.`,
      stack: [<FaReact />, <SiTailwindcss />,<TbApi /> ],
      link: 'https://its-muvi.netlify.app/'
    },
    {
      img: '/web-calc.png',
      title: 'Web - Calc',
      detail: `Web - Calc is a calculation application with various functions such as simple multiplication, addition, subtraction (standard calculator), calculation of ideal body weight (BMI), temperature conversion calculation, and other calculations that will be added to this application..`,
      stack: [<FaReact />, <SiTailwindcss />],
      link: 'https://its-web-calc.netlify.app'
    }
  ]

  return (
    <section id='work'>
      <h1 className='tag'>My Works</h1>
      <div className='work-container'>
        <div className='work-wrapper'>
          <h1>Orderin</h1>
          <ListWorks img={works[0].img} title={works[0].title} detail={works[0].detail} stack={works[0].stack} link={works[0].link} />
        </div>
        <div style={{flexDirection: 'row-reverse'}} className='work-wrapper'>
          <h1>Muvi</h1>
          <ListWorks img={works[1].img} title={works[1].title} detail={works[1].detail} stack={works[1].stack} link={works[1].link} />
        </div>
        <div className='work-wrapper'>
          <h1>Web - Calc</h1>
          <ListWorks img={works[2].img} title={works[2].title} detail={works[2].detail} stack={works[2].stack} link={works[2].link} />
        </div>
      </div>
    </section>
  )
}

export default Work;