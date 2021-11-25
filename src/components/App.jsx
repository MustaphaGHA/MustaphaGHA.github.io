import '../css/App.css';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home.jsx'
import Portfolio from './Portfolio';
import Service from './Service';


function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
