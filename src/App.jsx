import Navbar from './components/Navbar';
import './utils/font/Rajdhani-Regular.ttf'
import './App.scss';
import Hero from './components/Hero';
import About from './components/About';
import Exprerience from './components/Experience';
import Contact from './components/Contact';
import Work from './components/Works';
import Footer from './components/Footer';

function App() {

  return (
    <div className='wrapper'>
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
