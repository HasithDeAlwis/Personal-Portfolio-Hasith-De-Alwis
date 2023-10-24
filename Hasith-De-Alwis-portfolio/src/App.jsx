import React from 'react';
import styles from './styles';
import { Navbar, Feedback, MainSection, Button} from './components';
/**Weird bug occurs when I import Footer from the es6 deconstruction line above */
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage';
import About from './pages/About.jsx';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className = "App">
        <div className = "content">
          <Navbar />
          <Routes>
            <Route path="/" element = {<HomePage />}/>
            <Route path="/home" exact element = {<HomePage />} />
            <Route path = "/about-me" element = {<About />} />
            <Route path="/projects" element = {<Projects/>} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App