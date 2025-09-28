import { useEffect } from "react";
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
import Cursor from "./components/Cursor";
import ZoomInText from "./pages/ZoomInText";

function App() {
  useEffect(() => {
    const handleSpacebar = (event) => {
      if (event.code === "Space") {
        event.preventDefault();

        // Open in new tab without replacing current page
        window.open("https://www.unsquare.in", "_blank");
      }
    };

    window.addEventListener("keydown", handleSpacebar);

    return () => {
      window.removeEventListener("keydown", handleSpacebar);
    };
  }, []);

  return (
    <>
      <Cursor/>
      <Navbar/>
      <Hero />
      <Card />
      <Text/>
      <Cal />
      <Pricing />
      <ZoomInText/>
      <Data />
      <Ready />
      <Test />
      <Footer /> 
      <Merlin/>
    </>
  );
}

export default App;
