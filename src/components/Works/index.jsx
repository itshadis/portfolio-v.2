import ListWorks from './ListWorks';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMysql } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { RiJavascriptFill } from 'react-icons/ri';
import './index.scss';

function Work() {
  const works = [
    {
      img: '/images/vrent.png',
      title: 'V-Rent',
      detail: `It is a fullstack car rental web application, aimed at making it easier for car rental business owners to manage and also to making it easier for customer to rent a car.`,
      stack: [<RiJavascriptFill />, <FaReact />, <SiTailwindcss />, <FaNodeJs />, <SiExpress />, <SiMysql />],
      link: 'https://v-rent.vercel.app'
    },
    {
      img: '/images/self-order.png',
      title: 'Orderin',
      detail: `A simple self-order McDonald's clone that purpose to ease customers to ordering and without having to queue. The customer that have been ordering will get the code which will be given to the cashier to confirm the payment.`,
      stack: [<RiJavascriptFill />, <FaReact />, <SiTailwindcss />, <FaNodeJs />, <SiExpress />],
      link: 'https://its-orderin.netlify.app'
    },
    {
      img: '/images/muvi.png',
      title: 'itsMuvis',
      detail: `An application that displays a list of the latest movies from around the world along with detailed information about each movie. This application provides movies sorted into categories such as 'Trending Today', 'Top Rated', and 'Upcoming'. Additionally, you have the option to search for a specific movie of your choice.`,
      stack: [<RiJavascriptFill />, <FaReact />, <SiTailwindcss />,<TbApi /> ],
      link: 'https://its-muvi.netlify.app/'
    },
    {
      img: '/images/web-calc.png',
      title: 'Web - Calc',
      detail: `Web - Calc is a calculation application with various functions such as simple multiplication, addition, subtraction (standard calculator), calculation of ideal body weight (BMI), temperature conversion calculation, and other calculations that will be added to this application..`,
      stack: [<RiJavascriptFill />, <FaReact />, <SiTailwindcss />],
      link: 'https://its-web-calc.netlify.app'
    }
  ]

  return (
    <section id='projects'>
      <h1 className='tag'>My Projects</h1>
      <div className='work-container'>
        <div style={{flexDirection: 'row-reverse'}} className='work-wrapper'>
          <ListWorks img={works[0].img} title={works[0].title} detail={works[0].detail} stack={works[0].stack} link={works[0].link} />
        </div>
        <div className='work-wrapper'>
          <ListWorks img={works[1].img} title={works[1].title} detail={works[1].detail} stack={works[1].stack} link={works[1].link} />
        </div>
        <div style={{flexDirection: 'row-reverse'}} className='work-wrapper'>
          <ListWorks img={works[2].img} title={works[2].title} detail={works[2].detail} stack={works[2].stack} link={works[2].link} />
        </div>
        <div className='work-wrapper'>
          <ListWorks img={works[3].img} title={works[3].title} detail={works[3].detail} stack={works[3].stack} link={works[3].link} />
        </div>
      </div>
    </section>
  )
}

export default Work;