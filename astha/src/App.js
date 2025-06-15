import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar} from './components/NavBar';
import {Footer} from './components/Footer';
//import {Home} from './components/Home';
import {Contact} from './components/Contact'; 
import {Banner} from './components/Banner';
import {Gallery} from './components/Gallery';
function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
