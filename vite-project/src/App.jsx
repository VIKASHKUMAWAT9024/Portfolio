import './App.css';
import About from './component/About';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import  Service  from './component/Service';
import Project from './component/Project';
import Contact from './component/Contact';  
import Footer from './component/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      < Service/>
      <Project/>
      <Contact/>
      <Footer/>
    
    </div>
  );
}

export default App;
