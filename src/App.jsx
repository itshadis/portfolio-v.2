import About from './components/About';
import Exprerience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Work from './components/Works';
import './utils/font/Rajdhani-Regular.ttf'
import './App.scss';

function App() {

  return (
    <div className='wrapper'>
      <div className='light-animate'></div>
      <Navbar />
      <Hero />
      <About />
      <Exprerience />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
