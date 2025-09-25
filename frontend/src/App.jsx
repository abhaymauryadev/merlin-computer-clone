import Hero from './pages/Hero';
import Card from './pages/Card';
import Cal from './pages/Cal';
import Pricing from './pages/Pricing';
import Data from './pages/Data';
import Ready from './pages/Ready';
import Test from './pages/Test';
import Footer from './pages/footer'; 
import Merlin from './pages/Merlin';
import Navbar from './components/Navbar';
import Text from './pages/Text';

function App() {
  return (
    <>
    <Navbar/>
      <Hero />
      <Card />
      <Text/>
      <Cal />
      <Pricing />
      <Data />
      <Ready />
      <Test />
      <Footer /> 
      <Merlin/>
    </>
  );
}

export default App;
