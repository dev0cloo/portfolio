import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';


const App = () => {
  return (
    <div>
      <Header />
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

