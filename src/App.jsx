import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
   <>
   <Navbar></Navbar>
   <Hero></Hero>
   <About></About>
   <Services></Services>
   <Portfolio></Portfolio>
   <Contact></Contact>
   </>
  );
}

export default App;
