import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Services from "./components/Services/Services";
import './App.css';
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
    </div>
  );
}

export default App;
