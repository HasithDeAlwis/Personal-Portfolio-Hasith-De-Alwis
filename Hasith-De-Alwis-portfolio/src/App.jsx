import React from 'react';
import styles from './styles';
import { Navbar, Feedback, MainSection, Projects, Button} from './components';
/**Weird bug occurs when I import Footer from the es6 deconstruction line above */
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <HomePage />
  );
}

export default App