import NavBar from './components/Navbar/Navbar';
import Homepage from './components/Pages/Homepage';
import About from './components/Pages/About'
import Projects from './components/Pages/Projects'
import ContactMe from './components/Pages/ContactMe'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Homepage/>
        <About/>
        <Projects/>
        <ContactMe/>
      </div>
    </div>
  );
}

export default App;
